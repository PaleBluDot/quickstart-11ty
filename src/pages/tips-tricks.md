---
title: Tips and Trick
description: This is a Note.
eleventyNavigation:
  key: Tips & Tricks
---

<h2>{{ title }}</h2>

<p><strong>Current URL:</strong> {{page.url}}</p>

<p>List of all of the tips in notes. </p>

<ul>
  {%- for tip in collections.tips -%}
    <li><a href="{{ tip.url }}">{{ tip.data.title }}</a></li>
  {%- endfor -%}
</ul>
