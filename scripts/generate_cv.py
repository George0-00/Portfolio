#!/usr/bin/env python3
"""Regenerate Georgiy_Kuzminov_CV.pdf for the portfolio."""

from pathlib import Path

from fpdf import FPDF

OUTPUT = Path(__file__).resolve().parents[1] / "assets" / "Georgiy_Kuzminov_CV.pdf"


class CV(FPDF):
    def header(self):
        pass

    def section_title(self, title: str) -> None:
        self.ln(4)
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(30, 30, 30)
        self.cell(0, 7, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(180, 180, 180)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(3)

    def body_text(self, text: str, bold: bool = False) -> None:
        self.set_font("Helvetica", "B" if bold else "", 10)
        self.set_text_color(40, 40, 40)
        self.multi_cell(0, 4.8, text)
        self.ln(1)

    def bullet(self, text: str) -> None:
        self.set_font("Helvetica", "", 10)
        self.set_text_color(40, 40, 40)
        x = self.l_margin
        self.set_x(x)
        self.cell(4, 4.8, "-")
        self.multi_cell(0, 4.8, "  " + text)


def build_cv() -> None:
    pdf = CV()
    pdf.set_auto_page_break(auto=True, margin=14)
    pdf.add_page()
    pdf.set_margins(18, 16, 18)

    pdf.set_font("Helvetica", "B", 18)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(0, 10, "Georgiy Kuzminov", new_x="LMARGIN", new_y="NEXT")

    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(60, 60, 60)
    pdf.cell(0, 6, "Junior Python Backend Developer", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)
    pdf.set_font("Helvetica", "", 9.5)
    pdf.multi_cell(
        0,
        4.8,
        "+7 (928) 256-55-88  \u00b7  kuzzz.geo@gmail.com\n"
        "Telegram: @yourpuppet666  \u00b7  https://github.com/George0-00\n"
        "Portfolio: https://george0-00.github.io/Portfolio/",
    )

    pdf.section_title("SUMMARY")
    pdf.body_text(
        "Junior Python Backend Developer with a proven ability to build secure, test-covered REST APIs "
        "on Python 3 and Django. Comfortable owning end-to-end backend tasks: JWT auth, service-layer "
        "business logic, PostgreSQL, third-party HTTP integrations, and Telegram bot workflows. "
        "Focused on clean, maintainable code and ready to contribute to a collaborative engineering team."
    )

    pdf.section_title("TECHNOLOGIES")
    for item in [
        "Languages & fundamentals: Python 3, OOP, JSON, HTTP, Linux (CLI)",
        "Backend: Django, Django REST Framework, REST API, JWT (SimpleJWT), aiogram 3, "
        "Class-Based Views (CBV), service layer / layered architecture",
        "Databases: PostgreSQL, SQLite, SQL, Django ORM, SQLAlchemy, CRUD, query optimization",
        "Testing & code quality: pytest, unittest, flake8, PEP8",
        "Tools: Git, GitHub, Docker, requests, aiohttp, venv, environment variables",
    ]:
        pdf.bullet(item)

    pdf.section_title("PROJECTS")

    pdf.body_text("Steam Top-Up Bot", bold=True)
    pdf.body_text(
        "https://github.com/George0-00/steam_topup_bot  \u00b7  "
        "Python 3.11+, aiogram 3, SQLAlchemy, aiohttp, Platega API, Docker, SQLite"
    )
    pdf.body_text(
        "Telegram bot for automated Steam balance top-ups via Platega.io payments and Steam provider API."
    )
    for item in [
        "Built an end-to-end order flow: user onboarding, amount validation, Platega payment, "
        "webhook/polling confirmation, and automated Steam top-up with user notifications.",
        "Implemented an admin panel in Telegram for orders, commission/min-max limits, revenue stats, "
        "manual order management, and user broadcasts.",
        "Added idempotent payment processing, structured logging, SQLAlchemy persistence, RU/EN "
        "localization, and production deployment with Docker, nginx, and systemd.",
    ]:
        pdf.bullet(item)
    pdf.ln(2)

    pdf.body_text("Crypto Portfolio Tracker", bold=True)
    pdf.body_text(
        "https://github.com/George0-00/crypto-portfolio-tracker  \u00b7  "
        "Python 3, Django, DRF, SimpleJWT, PostgreSQL, unittest, requests"
    )
    pdf.body_text(
        "Backend REST API for crypto transaction tracking and live portfolio valuation (PnL / ROI)."
    )
    for item in [
        "Built a secured RESTful API with JWT authentication (access/refresh) and user registration.",
        "Moved portfolio analytics into a dedicated service layer with PnL and ROI metrics.",
        "Integrated CoinGecko for real-time market prices with graceful degradation on provider errors.",
        "Configured PostgreSQL via environment variables and covered core API flows with automated tests.",
    ]:
        pdf.bullet(item)
    pdf.ln(2)

    pdf.body_text("Blogicum", bold=True)
    pdf.body_text(
        "https://github.com/George0-00/blogicum  \u00b7  Python 3, Django, SQLite, pytest, flake8"
    )
    pdf.body_text(
        "Django web backend for publishing: posts, comments, profiles, authentication and authorization."
    )
    for item in [
        "Delivered a full publishing flow with Class-Based Views (CRUD) and authorship checks.",
        "Set up registration, password change and reset with owner-only edit rules.",
        "Eliminated N+1 queries with select_related and annotate; added pagination for author feeds.",
        "Covered business logic with pytest unit tests and maintained PEP8 style with flake8.",
    ]:
        pdf.bullet(item)

    pdf.section_title("EDUCATION")
    pdf.body_text("Secondary vocational education - Information Systems Programming (diploma)")
    pdf.body_text("Yandex Praktikum - Python Developer (intensive backend / software development retraining program)")

    pdf.section_title("ADDITIONAL")
    for item in [
        "Languages: Russian (native), English (working)",
        "Strong debugging and problem-solving skills - external API error handling and resilient endpoints",
        "Open to junior / internship roles (remote); pet projects on GitHub",
        "Actively building hands-on skills in FastAPI and Docker",
    ]:
        pdf.bullet(item)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUTPUT))
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    build_cv()
