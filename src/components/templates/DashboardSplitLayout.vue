<template>
  <Stack>
    <span class="w-full h-1/2">
      <div>
        <slot name="header"></slot>
      </div>
    </span>

    <span class="w-full h-2/3">
      <slot name="top"></slot>
    </span>

    <span class="w-full h-2/3">
      <Row>
        <span class="w-1/2">
          <slot name="left"></slot>
        </span>
        <span class="w-1/2">
          <slot name="right"></slot>
        </span>
      </Row>
    </span>

    <span class="w-full h-1/6">
      <slot name="bottom"></slot>
    </span>
  </Stack>
</template>
<script>
import { Row, Right, Stack, Grid } from "../flex";
export default {
  components: {
    Row,
    Right,
    Stack,
    Grid,
  },
};
</script>
