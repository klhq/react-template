import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-6 py-12 text-foreground">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">React Template</h1>
          </CardTitle>
          <CardDescription>A foundation for your next application.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-4">
          <p>React, TypeScript and accessible components. Start building in src/App.tsx.</p>
          <Button
            variant="outline"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            onClick={() => setIsDark((current) => !current)}
          >
            {isDark ? "Light theme" : "Dark theme"}
          </Button>
          <Dialog>
            <DialogTrigger render={<Button />}>Try the dialog</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Build something new</DialogTitle>
                <DialogDescription>
                  Give your next project a name. This example keeps your input in the browser.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-2">
                <label htmlFor="project-name">Project name</label>
                <Input id="project-name" aria-label="Project name" placeholder="My next app" />
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
