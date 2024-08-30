import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PersonalSection from "@features/accessories/personal";
import PlanSection from "@features/accessories/plan";
import MainLayout from "@features/layouts/mainLayout";
import { AppProvider } from "@contexts/AppContext";
import PickArticle from "@features/accessories/pick";
import FinishArticle from "@features/accessories/finish";
import ConfirmArticle from "@features/accessories/confirm";

describe("MainLayout Component", () => {
  beforeEach(() => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<PersonalSection />} />
              <Route path="plan" element={<PlanSection />} />
              <Route path="pick" element={<PickArticle />} />
              <Route path="finish" element={<FinishArticle />} />
              <Route path="confirm" element={<ConfirmArticle />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );
  });

  it("renders the Personal info step", () => {
    const stepCard = screen.getByRole("region", { name: /Personal info/i });
    expect(stepCard).toBeInTheDocument();

    const title = screen.getByText(/Personal info/i);
    expect(title).toBeInTheDocument();

    const button = screen.getByTestId("next-button");
    expect(button).toBeInTheDocument();
  });

  it("navigates to the next step when the next button is clicked", () => {
    const button = screen.getByTestId("next-button");
    expect(button).toHaveTextContent(/Next Step/i);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    let stepCard = screen.getByRole("region", {
      name: /Select your plan/i,
    });
    expect(stepCard).toBeInTheDocument();

    fireEvent.click(button);

    stepCard = screen.getByRole("region", { name: /Pick add-ons/i });
    expect(stepCard).toBeInTheDocument();

    fireEvent.click(button);

    stepCard = screen.getByRole("region", { name: /Finishing up/i });
    expect(stepCard).toBeInTheDocument();

    expect(button).toHaveTextContent(/Confirm/i);
    fireEvent.click(button);

    stepCard = screen.getByRole("region", { name: /Thank you!/i });
    expect(stepCard).toBeInTheDocument();

    const forwrdButton = screen.getByTestId("forward-button");
    expect(forwrdButton).toBeInTheDocument();
    expect(forwrdButton).toHaveAttribute("aria-hidden", "false");
  });
});
