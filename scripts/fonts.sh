#!/bin/sh
# Rebuilds public/fonts from upstream OFL sources (fonttools + brotli needed).
#   Caveat: @fontsource/caveat 5.3.0 latin 500 and 700 (the same OFL Caveat the
#   app instances; the app's files carry an "ink room" offset for SwiftUI that
#   would indent every wrapped line on the web, so they are not used here).
#   Nunito: @fontsource-variable/nunito 5.3.0 latin, wght limited to 400..800.
# Subset: Basic Latin, Latin-1 letters, quotes and a few symbols.
# Usage: sh scripts/fonts.sh <caveat package dir> <nunito package dir>
set -e
U="U+0020-007E,U+00A0,U+00A9,U+00AB,U+00BB,U+00C0-00FF,U+0152-0153,U+2018-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122"
# Bold (headlines) keeps calt, Caveat's alternates for repeated letters; Medium
# (small labels) drops it, which halves the file at no visible cost at 18 to 24 px.
pyftsubset "$1/files/caveat-latin-700-normal.woff2" --unicodes="$U" \
  --layout-features='kern,liga,calt,locl,mark,mkmk' --flavor=woff2 --output-file=public/fonts/caveat-bold.woff2
pyftsubset "$1/files/caveat-latin-500-normal.woff2" --unicodes="$U" \
  --layout-features='kern,liga,locl,mark,mkmk' --flavor=woff2 --output-file=public/fonts/caveat-medium.woff2
fonttools varLib.instancer "$2/files/nunito-latin-wght-normal.woff2" wght=400:800 -o /tmp/nunito-inst.ttf -q
pyftsubset /tmp/nunito-inst.ttf --unicodes="$U,U+2190-2193,U+2212,U+00D7" \
  --layout-features='kern,liga,locl,tnum,mark,mkmk' --flavor=woff2 --output-file=public/fonts/nunito-latin-var.woff2
