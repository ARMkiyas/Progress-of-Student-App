
export * from "@mantine/hooks";

declare module "@mantine/hooks" {
    export function useDebouncedState<T = any>(
        defaultValue: T,
        wait: number,
        options?: {
            leading: boolean;
        },
    ): readonly [T, (newValue: React.SetStateAction<T>) => void];
}