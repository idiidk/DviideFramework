this.prefix = 'test';
this.call = function(args, mh) {
  if(args.length > 0) {
    for(i=0;i<args.length;i++) {
      mh.clog(args[i].green);
    }
  }
}
