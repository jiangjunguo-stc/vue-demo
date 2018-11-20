<template>
  <p>
    {{records.count}}
  </p>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      records: state => state.recordsStore.records
    })
  },
  methods: {
    ...mapActions(['initRecords'])
  },
  mounted () {
    this.initRecords({ count: 999 })
  }
}
</script>
