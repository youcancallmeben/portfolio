---
layout: page
title: Works
permalink: /works/
---

<div id="workSection">
    <!-- <h2 class="post-list-heading">
      <a name="works"></a>
      {{ page.list_title | default: "Posts" }}
    </h2> -->
    {%- if site.posts.size > 0 -%}
    <ul class="post-list">

      {%- for post in site.posts -%}
      <li class="works">

        <!-- javascript delay for letting the animation load -->
        <a class="card-link" href="javascript:delay('{{ post.url | relative_url }}')">
          <div data-aos="fade-up" id="card{{ forloop.index }}" class="card container">
            <!-- circle that makes possible the bubble transition -->
            <div class="circle"></div>

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
            </div>

            <div data-aos="fade-down-right" class="featuredImage">
              <img alt="DividendoMockup" class="featured" src="/assets/{{ post.card-image }}" />
            </div>

          </div>
        </a>
      </li>

      {%- endfor -%}
    </ul>
    {%- endif -%}
  </div>