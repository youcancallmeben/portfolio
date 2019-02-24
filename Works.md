---
layout: page
title: Works
permalink: /works/

---

<div id="workSection">
    {%- if site.posts.size > 0 -%}
    <ul class="post-list">

      {%- for post in site.posts -%}
      <li class="works">
        <a class="card-link" href="{{ post.url | relative_url }}">
          <div data-aos="fade-up" id="card{{ forloop.index }}" class="card container">
            <div class="grid-container">
              <div class="title" data-aos="fade-up" data-aos-delay="300">
                <h3 class="card-title">
                    {{ post.title | escape }}
                </h3>
              </div>

              <div class="post-meta tags">
                {% for tag in post.tag %}
                <div class="tag">{{ tag }}</div>
                {% endfor %}
              </div>

              <!-- {%- if site.show_excerpts -%}
            <div class="excerpt">
              {{ post.excerpt }}
            </div>
            {%- endif -%} -->

            </div>
            <div data-aos="fade-down-left" class="featuredImage">
              <object type="image/svg+xml" data="{{ site.baseurl }}/assets/{{ post.card-image }}" class="featured"></object>
            </div>
          </div>
        </a>
      </li>
      {%- endfor -%}

    </ul>
    {%- endif -%}
  </div>