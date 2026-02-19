import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import "./index.css";
import Landing from "./pages/Landing";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ErrorBoundary>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                    </Routes>
                    <Toaster />
                </BrowserRouter>
            </ThemeProvider>
        </ErrorBoundary>
    </StrictMode>
);
