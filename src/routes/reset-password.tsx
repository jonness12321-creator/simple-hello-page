import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { BrandMark } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set a new password — CashGPT" },
      { name: "description", content: "Choose a new password for your CashGPT account." },
      { property: "og:title", content: "Set a new password — CashGPT" },
      {
        property: "og:description",
        content: "Choose a new password for your CashGPT account.",
      },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-3 text-center">
          <BrandMark className="size-14" />
          <h1 className="text-2xl">Set a new password</h1>
          <p className="text-sm text-muted-foreground">
            Open this page from the reset link in your email, then choose a new password.
          </p>
        </div>

        <form
          className="surface-card mt-6 space-y-3 p-5"
          onSubmit={async (event) => {
            event.preventDefault();
            if (password.length < 8) {
              toast.error("Use at least 8 characters.");
              return;
            }
            if (password !== confirm) {
              toast.error("Passwords don't match.");
              return;
            }
            setBusy(true);
            try {
              const { error } = await supabase.auth.updateUser({ password });
              if (error) throw error;
              toast.success("Password updated.");
              navigate({ to: "/home", replace: true });
            } catch (error) {
              toast.error((error as Error).message);
            } finally {
              setBusy(false);
            }
          }}
        >
          <div className="space-y-1.5">
            <Label htmlFor="new-password">New password</Label>
            <Input
              id="new-password"
              type="password"
              autoComplete="new-password"
              maxLength={72}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="confirm-password">Confirm password</Label>
            <Input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              maxLength={72}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <Button type="submit" variant="jade" className="w-full" disabled={busy}>
            {busy ? "Saving…" : "Update password"}
          </Button>
        </form>
      </div>
    </main>
  );
}
