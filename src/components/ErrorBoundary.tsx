import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./ui/button";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-destructive">Something went wrong</h1>
                    <p className="text-muted-foreground mb-8 max-w-md">
                        We're sorry, but an unexpected error has occurred. Please try refreshing the page.
                    </p>
                    {this.state.error && (
                        <div className="bg-muted p-4 rounded-md mb-8 text-left overflow-auto max-w-2xl w-full text-xs font-mono border border-border">
                            {this.state.error.toString()}
                        </div>
                    )}
                    <div className="flex gap-4">
                        <Button onClick={() => window.location.reload()}>
                            Refresh Page
                        </Button>
                        <Button variant="outline" onClick={() => (window.location.href = "/")}>
                            Go to Home
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
