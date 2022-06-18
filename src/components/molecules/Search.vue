<template>
  <div>
    <form action="//www.opticsplanet.com/search/" method="get">
      <div
        class="e-site-search-block e-site-search-block_opened"
        style="padding-left: 91px"
      >
        <div class="e-site-search-block__field">
          <div class="e-site-search-block__icon"></div>
          <input
            type="text"
            class="e-site-search-block__input"
            name="query"
            autocomplete="off"
            placeholder="Search by product, brand, category, deal or all of the above"
            aria-label="Search by product, brand, category, deal or all of the above"
          />
          <span class="e-site-search-block__clear" style="display: inline"></span>
        </div>
        <div
          class="e-site-search-block__scope e-site-search-scope op-plugin op-widget-initialized"
          data-plugins="op.widgets.SearchScope"
          data-plugins-options='{
                        "contentSelector": ".e-site-search-scope__dropdown",
                        "buttonTextSelector": ".e-site-search-scope__title",
                        "toggleSelector": ".e-site-search-scope__trigger",
                        "defaultValue": "default"
                    }'
          style="visibility: visible"
        >
          <div class="e-site-search-scope__trigger" title="Search within">
            <div class="e-site-search-scope__title">
              <span class="e-select__item-icon"></span>
              <span class="e-select__item-text">All</span>
            </div>
            <div class="e-site-search-scope__icon"></div>
          </div>
          <div class="e-site-search-scope__dropdown">
            <ul class="e-select e-select_with-span-icon">
              <li
                class="e-select__item e-site-search-scope-dropdown__item e-select__item_selected"
                data-value="default"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Entire Store</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item e-site-search-scope-dropdown__item_category"
                style="display: none"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text"></span>
              </li>
              <li class="e-select__gap">...</li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_123"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Apparel &amp; Footwear</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_1"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Astronomy</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_124"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Everything Else</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_2"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Eyewear</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_4"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Hunting</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_12"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Lab &amp; Science</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_7"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Military Gear</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_8"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Outdoor Gear</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_9"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Photo</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_6"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Police, EMS &amp; Fire</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_5"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Shooting</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_3"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Sport Optics</span>
              </li>
              <li
                class="e-select__item e-site-search-scope-dropdown__item"
                data-value="department_15"
              >
                <span class="e-select__item-icon"></span>
                <span class="e-select__item-text">Sports &amp; Hobbies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="e-site-search-button">
        <button class="e-site-search-button__action" type="submit" aria-label="Search">
          <span class="e-site-search-button__title-text">Search</span>
          <span class="e-site-search-button__title"></span>
        </button>
      </div>
    </form>

    <div
      class="e-site-search-dropdown e-site-search-dropdown_columns_2"
      style="width: auto"
    >
      <div
        class="e-site-search-dropdown__column e-site-search-dropdown__list_suggestions"
        data-column="1"
      >
        <div class="e-site-search-dropdown__inner">
          <div class="e-site-search-dropdown__title">SEARCH SUGGESTIONS:</div>
          <ul class="e-site-search-dropdown__list">
            <li class="e-site-search-dropdown__item e-site-search-item">
              <a
                href="https://www.opticsplanet.com/stern-defense-brand.html"
                class="e-site-search-item__link e-site-search-link"
                data-type="direct"
                data-search-type="brand"
                data-id="1"
                data-value="Stern Defense"
              >
                <span class="e-site-search-link__text"
                  ><span class="e-site-search-link__text_bolded">Stern</span>
                  Defense</span
                >

                <span class="e-site-search-link__scope"> brand </span>
              </a>

              <div
                class="e-site-search-item__scope"
                title="Apply suggestion"
                data-value="Stern Defense"
              >
                <span class="e-site-search-item__scope-icon"></span>
              </div>
            </li>
            <li class="e-site-search-dropdown__item e-site-search-item">
              <a
                href="https://www.opticsplanet.com/stern-defense-gun-parts.html"
                class="e-site-search-item__link e-site-search-link"
                data-type="direct"
                data-search-type="brand"
                data-id="2"
                data-value="Stern Defense"
                data-scope='{
                                "name": "Gun Parts",
                                "data": "category_3221",
                                "type": "category"
                            }'
              >
                <span class="e-site-search-link__text"
                  ><span class="e-site-search-link__text_bolded">Stern</span>
                  Defense</span
                >

                <span class="e-site-search-link__scope">
                  brand in Gun Parts category
                </span>
              </a>

              <div
                class="e-site-search-item__scope"
                title="Apply suggestion"
                data-value="Stern Defense"
                data-scope='{"name": "Gun Parts", "data": "category_3221"}'
              >
                <span class="e-site-search-item__scope-icon"></span>
              </div>
            </li>
            <li class="e-site-search-dropdown__item e-site-search-item">
              <a
                href="https://www.opticsplanet.com/stern-defense-ar15-parts.html"
                class="e-site-search-item__link e-site-search-link"
                data-type="direct"
                data-search-type="brand"
                data-id="3"
                data-value="Stern Defense"
                data-scope='{
                                "name": "AR15 Parts",
                                "data": "category_3406",
                                "type": "category"
                            }'
              >
                <span class="e-site-search-link__text"
                  ><span class="e-site-search-link__text_bolded">Stern</span>
                  Defense</span
                >

                <span class="e-site-search-link__scope">
                  brand in AR15 Parts category
                </span>
              </a>

              <div
                class="e-site-search-item__scope"
                title="Apply suggestion"
                data-value="Stern Defense"
                data-scope='{"name": "AR15 Parts", "data": "category_3406"}'
              >
                <span class="e-site-search-item__scope-icon"></span>
              </div>
            </li>
            <li class="e-site-search-dropdown__item e-site-search-item">
              <a
                href="https://www.opticsplanet.com/stern-defense-rifle-parts.html"
                class="e-site-search-item__link e-site-search-link"
                data-type="direct"
                data-search-type="brand"
                data-id="4"
                data-value="Stern Defense"
                data-scope='{
                                "name": "Rifle Parts",
                                "data": "category_4392",
                                "type": "category"
                            }'
              >
                <span class="e-site-search-link__text"
                  ><span class="e-site-search-link__text_bolded">Stern</span>
                  Defense</span
                >

                <span class="e-site-search-link__scope">
                  brand in Rifle Parts category
                </span>
              </a>

              <div
                class="e-site-search-item__scope"
                title="Apply suggestion"
                data-value="Stern Defense"
                data-scope='{"name": "Rifle Parts", "data": "category_4392"}'
              >
                <span class="e-site-search-item__scope-icon"></span>
              </div>
            </li>
            <li class="e-site-search-dropdown__item e-site-search-item">
              <a
                href="https://www.opticsplanet.com/stern-defense-ar15-upper-receiver-parts.html"
                class="e-site-search-item__link e-site-search-link"
                data-type="direct"
                data-search-type="brand"
                data-id="5"
                data-value="Stern Defense"
                data-scope='{
                                "name": "AR15 Upper Parts",
                                "data": "category_3405",
                                "type": "category"
                            }'
              >
                <span class="e-site-search-link__text"
                  ><span class="e-site-search-link__text_bolded">Stern</span>
                  Defense</span
                >

                <span class="e-site-search-link__scope">
                  brand in AR15 Upper Parts category
                </span>
              </a>

              <div
                class="e-site-search-item__scope"
                title="Apply suggestion"
                data-value="Stern Defense"
                data-scope='{"name": "AR15 Upper Parts", "data": "category_3405"}'
              >
                <span class="e-site-search-item__scope-icon"></span>
              </div>
            </li>
            <li class="e-site-search-dropdown__item e-site-search-item">
              <a
                href="https://www.opticsplanet.com/stern-defense-bolt-carrier-group.html"
                class="e-site-search-item__link e-site-search-link"
                data-type="direct"
                data-search-type="brand"
                data-id="6"
                data-value="Stern Defense"
                data-scope='{
                                "name": "Bolt Carrier Groups",
                                "data": "category_4401",
                                "type": "category"
                            }'
              >
                <span class="e-site-search-link__text"
                  ><span class="e-site-search-link__text_bolded">Stern</span>
                  Defense</span
                >

                <span class="e-site-search-link__scope">
                  brand in Bolt Carrier Groups category
                </span>
              </a>

              <div
                class="e-site-search-item__scope"
                title="Apply suggestion"
                data-value="Stern Defense"
                data-scope='{"name": "Bolt Carrier Groups", "data": "category_4401"}'
              >
                <span class="e-site-search-item__scope-icon"></span>
              </div>
            </li>
            <li class="e-site-search-dropdown__item e-site-search-item">
              <a
                href="https://www.opticsplanet.com/stern-defense-muzzle-devices.html"
                class="e-site-search-item__link e-site-search-link"
                data-type="direct"
                data-search-type="brand"
                data-id="7"
                data-value="Stern Defense"
                data-scope='{
                                "name": "Muzzle Devices",
                                "data": "category_3391",
                                "type": "category"
                            }'
              >
                <span class="e-site-search-link__text"
                  ><span class="e-site-search-link__text_bolded">Stern</span>
                  Defense</span
                >

                <span class="e-site-search-link__scope">
                  brand in Muzzle Devices category
                </span>
              </a>

              <div
                class="e-site-search-item__scope"
                title="Apply suggestion"
                data-value="Stern Defense"
                data-scope='{"name": "Muzzle Devices", "data": "category_3391"}'
              >
                <span class="e-site-search-item__scope-icon"></span>
              </div>
            </li>
            <li
              class="e-site-search-dropdown__item e-site-search-item e-site-search-item_last"
            >
              <a
                href="https://www.opticsplanet.com/s/stern-defense-trigger"
                class="e-site-search-item__link e-site-search-link"
                data-type="taxonomy"
                data-search-type=""
                data-id="8"
                data-value="stern defense trigger"
              >
                <span class="e-site-search-link__text"
                  ><span class="e-site-search-link__text_bolded">stern</span> defense
                  trigger</span
                >

                <span class="e-site-search-link__scope"> </span>
              </a>

              <div
                class="e-site-search-item__scope"
                title="Apply suggestion"
                data-value="stern defense trigger"
              >
                <span class="e-site-search-item__scope-icon"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="e-site-search-dropdown__column e-site-search-dropdown__list_products"
        data-column="2"
      >
        <div class="e-site-search-dropdown__inner">
          <div class="e-site-search-dropdown__title">RECOMMENDED PRODUCTS:</div>
          <ul class="e-site-search-dropdown__list">
            <li class="e-site-search-dropdown__item">
              <a
                href="https://www.opticsplanet.com/stern-defense-mag-ad9-ar-15-glock-9mm-40-magazine-conversion-adapter.html"
                class="e-site-search-product e-site-search-link"
                data-type="product"
                data-id="1"
              >
                <div class="e-site-search-product__thumb">
                  <img
                    class="e-site-search-product__image"
                    alt="Stern Defense MAG-AD9 AR-15 Glock 9mm/.40 Magazine Conversion Adapter"
                    src="https://op1.0ps.us/66-58-ffffff/opplanet-stern-defense-mag-ad9-ar-15-m4-m16-magazine-conversion-adapter-glock-9mm-40s-w-black-001-sd-mag-ad9-9and40-m-main.jpg"
                    width="66px"
                    height="58px"
                  />
                </div>
                <div class="e-site-search-product__content">
                  <div class="e-site-search-product__title">
                    <span class="e-site-search-link__text_bolded">Stern</span> Defense
                    MAG-AD9 AR-15 Glock 9mm/.40 Magazine Conversion Adapter
                  </div>
                  <div class="e-site-search-product-rating">
                    <div class="e-site-search-product-rating__stars">
                      <span
                        class="e-site-search-product-rating__gold-stars"
                        style="width: 93%"
                      ></span>
                    </div>
                    <span class="e-site-search-product-rating__count"> (31) </span>
                  </div>
                </div>
              </a>
            </li>
            <li class="e-site-search-dropdown__item">
              <a
                href="https://www.opticsplanet.com/stern-defense-ar-15-6-inch-assembled-9mm-upper-receiver-w-8-inch-mlok-rail.html"
                class="e-site-search-product e-site-search-link"
                data-type="product"
                data-id="2"
              >
                <div class="e-site-search-product__thumb">
                  <img
                    class="e-site-search-product__image"
                    alt="Stern Defense AR-15 6 inch Assembled 9mm Upper Receiver w/8 inch MLOK Rail"
                    src="https://op1.0ps.us/66-58-ffffff/opplanet-stern-defense-ar-15-upper-receiver-9mm-6in-barrel-8in-mlok-rail-sd-bu9-bolt-sd-ch1-charging-handle-sd-hbc-blast-can-black-015-sd8inchmod5-kk-main.jpg"
                    width="66px"
                    height="58px"
                  />
                </div>
                <div class="e-site-search-product__content">
                  <div class="e-site-search-product__title">
                    <span class="e-site-search-link__text_bolded">Stern</span> Defense
                    AR-15 6 inch Assembled 9mm Upper Receiver w/8 inch MLOK Rail
                  </div>
                  <div class="e-site-search-product-rating">
                    <div class="e-site-search-product-rating__stars">
                      <span
                        class="e-site-search-product-rating__gold-stars"
                        style="width: 76%"
                      ></span>
                    </div>
                    <span class="e-site-search-product-rating__count"> (5) </span>
                  </div>
                </div>
              </a>
            </li>
            <li class="e-site-search-dropdown__item">
              <a
                href="https://www.opticsplanet.com/stern-defense-hs2-hybrid-2-stage-nib-drop-in-trigger.html"
                class="e-site-search-product e-site-search-link"
                data-type="product"
                data-id="3"
              >
                <div class="e-site-search-product__thumb">
                  <img
                    class="e-site-search-product__image"
                    alt="Stern Defense HS2 Hybrid 2 Stage NiB Drop In Trigger"
                    src="https://op2.0ps.us/66-58-ffffff/opplanet-stern-defense-hs2-hybrid-2-stage-nib-drop-in-trigger-009-h2s-nib-d1-m-main.jpg"
                    width="66px"
                    height="58px"
                  />
                </div>
                <div class="e-site-search-product__content">
                  <div class="e-site-search-product__title">
                    <span class="e-site-search-link__text_bolded">Stern</span> Defense HS2
                    Hybrid 2 Stage NiB Drop In Trigger
                  </div>
                  <div class="e-site-search-product-rating">
                    <div class="e-site-search-product-rating__stars">
                      <span
                        class="e-site-search-product-rating__gold-stars"
                        style="width: 85%"
                      ></span>
                    </div>
                    <span class="e-site-search-product-rating__count"> (4) </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="e-site-search-tooltip op-plugin op-widget-initialized"
      data-plugins="op.widgets.SearchTooltip"
      style="display: none; width: auto"
    >
      <div class="e-site-search-tooltip__icon"></div>
      <div class="e-site-search-tooltip__content">
        <div class="e-site-search-tooltip__title">TIP</div>
        <div class="e-site-search-tooltip__message"></div>
      </div>
      <div class="e-site-search-tooltip__close">
        <span class="e-site-search-tooltip__close-icon"></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
