#!/bin/bash

# Bypassing Jekyll on GitHub Pages
touch ./out/.nojekyll

# Add CNAME config file to subtree folder
cp CNAME ./out/CNAME
