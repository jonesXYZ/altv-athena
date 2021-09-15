export interface ProgressBar {
    uid: string;
    position: { x: number; y: number; z: number };
    color: { r: number; g: number; b: number; a: number };
    milliseconds: number;
    distance: number;
    text?: string;
    percentageEnabled?: boolean;
    startTime?: number;
    finalTime?: number;
}
