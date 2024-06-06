export type Challenge = {
    duration: number,
    remainingDays: number | string,
    progress: number,
    progressPercentage: number,
    progressColor: string,
    id: number,
    hero: boolean,
    title: string,
    description: string,
    agancy: string,
    startDate: string,
    startTime: number | string,
    endDate: number | string,
    endTime: number | string,
    category: string,
    cover: string,
    author: {
        name: string,
        username: string,
        avatar: string,
        title: string
    },
    managers: Array<Manager>,
    reviewers: Array<Reviwers>,
    status: Array<Status>
}

export type Reviwers = {
    id: number,
    name: string,
    username: string,
    avatar: string,
    title: string
}
export type Manager = {

    id: number,
    roll: string,
    name: string,
    username: string,
    avatar: string,
    title: string
}

export type Status = {
    id: number,
    icon: string,
    name: string,
    endDate: string,
    endTime: string,
    status: string
}

export type Variant = "primary" | "primary-dark" | "secondary" | "secondary-dark" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
export type Size = "sm" | "md" | "lg";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonProps = {
    size?: Size;
    buttonType?: ButtonType;
    variant?: Variant;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
};