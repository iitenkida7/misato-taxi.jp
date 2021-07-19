<template>
  <a
    class="rounded mx-auto d-block btn btn-primary btn-lg"
    @click="gaEventTel"
    href="tel:048-952-3310"
  >
    048-952-
    <ruby>
      <rb>3310</rb>
      <rt>みさと</rt>
    </ruby>
  </a>
</template>

<script>
export default {
  methods: {
    gaEventTel() {
      this.$gtag("event", "tel", {
        event_category: "misato-taxi",
        event_label: "call",
        value: 1
      });
    }
  }
};
</script>
