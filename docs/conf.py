"""Sphinx configuration for the Solar Orbiter Major Flare Campaigns site."""

from datetime import datetime

# -- Project information -----------------------------------------------------

project = "Solar Orbiter Major Flare Campaigns"
author = "ISSI International Team #25-641"
copyright = f"{datetime.now():%Y}. Site content and catalogue data CC BY 4.0"

# -- General configuration ---------------------------------------------------

extensions = [
    "myst_parser",
    "sphinx_design",
    "sphinx_copybutton",
]

source_suffix = {".md": "markdown", ".rst": "restructuredtext"}
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store", "_data"]

# -- MyST configuration ------------------------------------------------------

myst_enable_extensions = [
    "attrs_inline",
    "colon_fence",
    "deflist",
    "fieldlist",
    "linkify",
    "substitution",
    "tasklist",
]
myst_heading_anchors = 3

# -- HTML output -------------------------------------------------------------

html_theme = "pydata_sphinx_theme"
html_static_path = ["_static"]
# Publish the generated CSV catalogue alongside the HTML so it is downloadable.
html_extra_path = ["_data"]
templates_path = ["_templates"]
html_css_files = ["custom.css"]
html_js_files = ["catalogue.js"]
html_title = "Solar Orbiter Major Flare Campaigns"
html_show_sourcelink = False

html_theme_options = {
    # No icon links in the navbar: they crowded the nav.  GitHub is reachable
    # from the footer, the Contribute page and the edit button on each page.
    # Search and theme toggle sit at the right-hand end of the bar, on the
    # same row as the navigation.
    "navbar_persistent": [],
    "navbar_end": ["theme-switcher", "search-button"],
    "search_bar_text": "Search the catalogue...",
    "use_edit_page_button": True,
    # Prev/next stepping is meaningless across 64 generated campaign pages.
    "show_prev_next": False,
    "show_toc_level": 2,
    "secondary_sidebar_items": ["page-toc"],
    "navbar_align": "left",
    "navbar_center": ["navbar-nav"],
    "header_links_before_dropdown": 12,
    "navigation_with_keys": True,
    "footer_start": ["contact"],
    "footer_end": ["copyright"],
    "logo": {
        # PLACEHOLDER logo: swap _static/solar-orbiter-logo.svg for the
        # official Solar Orbiter mission logo when cleared for use.
        "image_light": "_static/solar-orbiter-logo.svg",
        "image_dark": "_static/solar-orbiter-logo.svg",
        "text": "Major Flare Campaigns",
        "alt_text": "Solar Orbiter Major Flare Campaigns",
    },
}

# The navigation lives entirely in the header, so the left sidebar would be
# empty on every page.  Remove it and let the content column breathe.
html_sidebars = {"**": []}

html_context = {
    "github_user": "solo-flare-issi",
    "github_repo": "mfc-website",
    "github_version": "main",
    "doc_path": "docs",
    "default_mode": "light",
}
