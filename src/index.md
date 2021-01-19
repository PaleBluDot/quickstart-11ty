---
layout: "base"
title: 11ty Boilerplate!
description: A starting template using 11ty.
featImg: /project52/wynwood-art-wall.jpg
---

<article>
<img src="{{cloudinary.logomarkUrl}}{{featImg}}" class="full-width" />
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
</article>
