---
layout: "base"
title: 11ty Boilerplate!
description: A starting template using 11ty.
featImg: https://res.cloudinary.com/psd/image/upload/t_logomark/project52/wynwood-art-wall.jpg
---

<section class="content">
  <p>Whats included in this templates:</p>
  <ol>
  {%- for note in collections.notes -%}
    <li>
      <h4><a href="{{ note.url }}">{{ note.data.title }}</a></h4>
    </li>
  {%- endfor -%}
  </ol>
</section>
