---
layout: "layouts/base.njk"
title: 11ty Boilertplate!
description: A starting template using 11ty.
featuredImg: /media/blackstar-banner.jpg
---

## {{title}}

**Current URL:**`{{site.url}}{{page.url}}`

<img src="{{featuredImg}}">

## Notes

<hr />

{%- for note in collections.notes -%}

  <h3><a href="{{ note.url }}">{{ note.data.title }}</a></h3>

{%- endfor -%}
