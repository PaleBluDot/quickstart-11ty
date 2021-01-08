---
title: Notes
description: This is a home page that has all notes listed.
eleventyNavigation:
  key: Notes
---

<p>{{description}}</p>

<ul>
  {%- for tip in collections.tips -%}
    <li><a href="{{ tip.url }}">{{ tip.data.title }}</a></li>
  {%- endfor -%}
</ul>
