import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

vi.mock("next/link", () => ({
  default: ({ children }: { children: React.ReactNode }) => <a>{children}</a>
}));

describe("HomePage", () => {
  it("renders main value propositions", () => {
    render(<HomePage />);
    expect(screen.getByText(/Plataforma integral/)).toBeInTheDocument();
    expect(screen.getByText(/Activa tu placa NFC/)).toBeInTheDocument();
    expect(screen.getByText(/Gana recompensas/)).toBeInTheDocument();
  });
});
