import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { LoginForm } from "@/components/auth/login-form";

const signInWithOtp = vi.fn();

vi.mock("@/lib/supabase/client", () => ({
  getSupabaseClient: () => ({
    auth: {
      signInWithOtp
    }
  })
}));

describe("LoginForm", () => {
  beforeEach(() => {
    signInWithOtp.mockReset();
  });

  it("muestra mensaje de éxito cuando el envío es correcto", async () => {
    signInWithOtp.mockResolvedValueOnce({ error: null });

    render(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/Correo electrónico/i), "test@example.com");
    await userEvent.click(screen.getByRole("button", { name: /Enviar enlace mágico/i }));

    await waitFor(() => expect(signInWithOtp).toHaveBeenCalledWith({
      email: "test@example.com",
      options: { shouldCreateUser: true }
    }));

    expect(await screen.findByText(/Revisa tu correo/)).toBeInTheDocument();
  });

  it("muestra mensaje de error cuando la API responde con fallo", async () => {
    signInWithOtp.mockResolvedValueOnce({ error: { message: "No se pudo enviar" } });

    render(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/Correo electrónico/i), "fail@example.com");
    await userEvent.click(screen.getByRole("button", { name: /Enviar enlace mágico/i }));

    expect(await screen.findByText(/No se pudo enviar/)).toBeInTheDocument();
  });
});
