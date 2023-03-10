Page({
  data: {
    name: '前端南玖'
  },
  methods: {
    fn() {
      console.log('fn');
    }
  },
  onLoad() {
    console.log('created', this.name);
  },
  onReady() {
    console.log('mounted', this.name);
  }
});