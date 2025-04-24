class SecureHashTable {
  constructor() {
    this.bucketSizes = [53, 97, 199, 307, 509, 769, 1021, 1297, 1601, 2027, 2539, 3079, 3583, 4093, 4637, 5231, 5923, 6599, 7331, 8009, 8731, 9491];
    this.bucketSizeIndex = 0;
    this.size = this.bucketSizes[this.bucketSizeIndex];
    this.table = new Array(this.size);
    this.count = 0;
  }

}