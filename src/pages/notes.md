---
title: Notes
description: This is a home page that has all notes listed.
eleventyNavigation:
  key: Notes
---

<p>{{description}}</p>
<ol>
{%- for note in collections.notes -%}
  <li>
    <h4><a href="{{ note.url }}">{{ note.data.title }}</a></h4>
  </li>
{%- endfor -%}
</ol>
