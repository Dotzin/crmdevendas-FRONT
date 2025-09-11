"use client";

import React, { useState } from "react";
import {
    DndContext,
    closestCorners,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
    useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Item = { id: string; title: string };
type Columns = Record<string, Item[]>;

const SortableItem = ({ id, title }: Item) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="p-3 mb-2 bg-white rounded-lg shadow cursor-grab"
        >
            {title}
        </div>
    );
};

export default function Funil() {
    const [columns, setColumns] = useState<Columns>({
        lead: [
            { id: "1", title: "Contato inicial" },
            { id: "2", title: "Email enviado" },
        ],
        qualificacao: [{ id: "3", title: "Proposta enviada" }],
        negociacao: [{ id: "4", title: "Reunião marcada" }],
        fechado: [{ id: "5", title: "Contrato assinado" }],
    });

    const sensors = useSensors(useSensor(PointerSensor));

    function findColumn(itemId: string) {
        return Object.keys(columns).find((colId) =>
            columns[colId].some((item) => item.id === itemId)
        );
    }

    function handleDragEnd(event: any) {
        const { active, over } = event;
        if (!over) return;

        const sourceCol = findColumn(active.id);
        const targetCol = findColumn(over.id) || over.id;

        if (!sourceCol || !targetCol) return;

        if (sourceCol === targetCol) {
            setColumns((prev) => ({
                ...prev,
                [sourceCol]: arrayMove(
                    prev[sourceCol],
                    prev[sourceCol].findIndex((i) => i.id === active.id),
                    prev[sourceCol].findIndex((i) => i.id === over.id)
                ),
            }));
        } else {
            setColumns((prev) => {
                const sourceItems = [...prev[sourceCol]];
                const targetItems = [...prev[targetCol]];

                const sourceIndex = sourceItems.findIndex((i) => i.id === active.id);
                const [movedItem] = sourceItems.splice(sourceIndex, 1);

                targetItems.push(movedItem);

                return {
                    ...prev,
                    [sourceCol]: sourceItems,
                    [targetCol]: targetItems,
                };
            });
        }
    }

    const columnTitles = {
        lead: "Lead",
        qualificacao: "Qualificação",
        negociacao: "Negociação",
        fechado: "Fechado"
    };

    return (
        <div className="h-full">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Funil de Vendas</h1>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragEnd={handleDragEnd}
            >
                <div className="flex gap-6 h-full overflow-x-auto">
                    {Object.entries(columns).map(([colId, items]) => (
                        <div
                            key={colId}
                            className="flex-1 min-w-[280px] p-4 bg-white rounded-lg shadow-sm border min-h-[500px]"
                        >
                            <h3 className="mb-4 text-center font-semibold text-gray-800 text-lg">
                                {columnTitles[colId as keyof typeof columnTitles]}
                            </h3>
                            <SortableContext
                                items={items.map((i) => i.id)}
                                strategy={verticalListSortingStrategy}
                            >
                                {items.map((item) => (
                                    <SortableItem key={item.id} {...item} />
                                ))}
                            </SortableContext>
                        </div>
                    ))}
                </div>
            </DndContext>
        </div>
    );
}
