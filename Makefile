# Minimal makefile for Sphinx documentation

SPHINXOPTS    ?= -W --keep-going
SPHINXBUILD   ?= sphinx-build
SOURCEDIR     = docs
BUILDDIR      = _build

.PHONY: help html livehtml linkcheck clean

help:
	@echo "make html      Build the site into $(BUILDDIR)/html"
	@echo "make livehtml  Serve with live reload (needs sphinx-autobuild)"
	@echo "make linkcheck Check external links"
	@echo "make clean     Remove the build directory"

html:
	$(SPHINXBUILD) -b html "$(SOURCEDIR)" "$(BUILDDIR)/html" $(SPHINXOPTS)

livehtml:
	sphinx-autobuild "$(SOURCEDIR)" "$(BUILDDIR)/html" $(SPHINXOPTS)

linkcheck:
	$(SPHINXBUILD) -b linkcheck "$(SOURCEDIR)" "$(BUILDDIR)/linkcheck" $(SPHINXOPTS)

clean:
	rm -rf "$(BUILDDIR)"
