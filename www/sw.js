importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "cfb994aca3977b07491e7c75afe4670e"
  },
  {
    "url": "bars/index.html",
    "revision": "25949f702eecf239193e39e187b8bdc8"
  },
  {
    "url": "beers/index.html",
    "revision": "cd0d00160d435341453d40486ec1cbde"
  },
  {
    "url": "build/app.global.js",
    "revision": "399623ff387a2a494fbd674e24efa5da"
  },
  {
    "url": "build/app.js",
    "revision": "e271095a312376e8af2eeef45eb4310c"
  },
  {
    "url": "build/app.registry.json",
    "revision": "09a3128b095565ca7dbef1e1413cb654"
  },
  {
    "url": "build/app/06ic4yhp.css",
    "revision": "b0a6364d0a9f604b59aec815d2728503"
  },
  {
    "url": "build/app/0hxnh8jd.css",
    "revision": "6c5dd52d6ed112f4a0ef65d09af43690"
  },
  {
    "url": "build/app/0jqvdqhk.css",
    "revision": "5a981a9dd5281c0a4b34d08a142e9b1c"
  },
  {
    "url": "build/app/0uzl7bcx.css",
    "revision": "03ac0eb8190067b7dc64d85c7c5dc797"
  },
  {
    "url": "build/app/0xihkhjr.css",
    "revision": "e63ae337669067d7eb0a8380c233287f"
  },
  {
    "url": "build/app/1ksfzagb.css",
    "revision": "0fafbf8f4a6551a78fe6dbdf086d68d3"
  },
  {
    "url": "build/app/2l748ykg.js",
    "revision": "78c00abecf04de320cf9287caa58e55c"
  },
  {
    "url": "build/app/2pvpqemf.js",
    "revision": "6d09bfcd0315dd74ae0097b08f25b147"
  },
  {
    "url": "build/app/3fmxhiq8.css",
    "revision": "6b709966d858fbc884df580c5e0358b6"
  },
  {
    "url": "build/app/49zjgs1o.css",
    "revision": "84a7506a5b446bb5bf456576d182d0b6"
  },
  {
    "url": "build/app/4iwl584z.css",
    "revision": "da522fbeb420c4fac69306f513fc609a"
  },
  {
    "url": "build/app/4rnded7o.css",
    "revision": "c45340fa1a202fc3e7bd4569477bad62"
  },
  {
    "url": "build/app/4vsdqbz7.css",
    "revision": "3e0b706c97d296745d1e213e26de6fb5"
  },
  {
    "url": "build/app/5qeve2wx.js",
    "revision": "8f34f4b22d69e7780a41074b59b802ab"
  },
  {
    "url": "build/app/6fhzxxo9.js",
    "revision": "f26467ef13d7ab3b056ef8366f88760c"
  },
  {
    "url": "build/app/7ewyr8bj.css",
    "revision": "cd927348c414bfdee50de0b6d6db5637"
  },
  {
    "url": "build/app/837eoj69.css",
    "revision": "9eae16c0e6021113e98724f2295a59b6"
  },
  {
    "url": "build/app/8cs2ebdy.js",
    "revision": "34a38157d352ee2e569f508d01891d38"
  },
  {
    "url": "build/app/8gb6r6gu.css",
    "revision": "a202747e5a735a32f182cbeac1f93122"
  },
  {
    "url": "build/app/a9zp9z7k.css",
    "revision": "e7c7381ba1df2ca3a3af22e450d726d4"
  },
  {
    "url": "build/app/aasp1nnk.css",
    "revision": "0b4f6efbb20d73367edc95e26ae253d9"
  },
  {
    "url": "build/app/abqdzv8r.css",
    "revision": "fa5e8e47f655d753d752feee4913ddde"
  },
  {
    "url": "build/app/afszhnlq.css",
    "revision": "1e738872440984a85184a72ff8a1b53d"
  },
  {
    "url": "build/app/app.ar1xu3nb.js",
    "revision": "a8e93bffef850f122d7dc9c144b5bd60"
  },
  {
    "url": "build/app/app.hucwkbrl.pf.js",
    "revision": "9db7deb8c9938ec0096cdf5491578652"
  },
  {
    "url": "build/app/au2o1dlq.css",
    "revision": "3df3691eefe0ae5b3c3acb2514e389db"
  },
  {
    "url": "build/app/az2ne6wf.css",
    "revision": "2ecc9c23bddfeca6d110047f1fcfc4dd"
  },
  {
    "url": "build/app/b0b17nlp.js",
    "revision": "e583e6ee0be741fe531c43901b27d724"
  },
  {
    "url": "build/app/bkwb65g6.css",
    "revision": "4e22704b5f3b3a036f2ff0779f2d7010"
  },
  {
    "url": "build/app/bkwppxbe.js",
    "revision": "0b218a2817f096db7395b5226bdaa016"
  },
  {
    "url": "build/app/bngvz016.css",
    "revision": "c917fd1e1b9b7b1c8497f157d0f200e2"
  },
  {
    "url": "build/app/bsaais6h.js",
    "revision": "8fbcbc0866b257f4a0980c11dfa7a5d8"
  },
  {
    "url": "build/app/bvpu2pwa.js",
    "revision": "afe18b116620aacfd7c3daa5bc52bb76"
  },
  {
    "url": "build/app/bxheg2s7.js",
    "revision": "65fbc7ac1f4cab698c8689a11e0b154f"
  },
  {
    "url": "build/app/c0aqvv5a.css",
    "revision": "6b5eeffd1286bd2eb107a0d7ee35d5d0"
  },
  {
    "url": "build/app/df4cbjox.css",
    "revision": "ab80bfa41d118be4b0ae399c517bdb05"
  },
  {
    "url": "build/app/djp8mbr3.css",
    "revision": "6dd3446b737ca9c9c591aa96c1fbe34e"
  },
  {
    "url": "build/app/dsrelshu.js",
    "revision": "a35bd41c594ddbda8f97fce84d8e44f2"
  },
  {
    "url": "build/app/duz4cvh3.js",
    "revision": "e35c8202401f73fc954d7ae478630562"
  },
  {
    "url": "build/app/e5ll71p0.css",
    "revision": "bbfccdefd4a3ed319a8854fe1e6017b3"
  },
  {
    "url": "build/app/fkuja1qy.css",
    "revision": "ce608a91f0cb4a65332658f60056b418"
  },
  {
    "url": "build/app/fom5fqld.css",
    "revision": "23cd01222f1bdb3d12e8587128303e02"
  },
  {
    "url": "build/app/fyyer5aq.css",
    "revision": "8b00c85605a084d1072a1d8b651d9abe"
  },
  {
    "url": "build/app/g82xarp6.css",
    "revision": "0ce9d3b19756ef79783f85bafed2b6e6"
  },
  {
    "url": "build/app/g8hqhkj4.css",
    "revision": "82b298334c64455ba78be00e457ab94d"
  },
  {
    "url": "build/app/gehj4uhs.js",
    "revision": "afb55203c6dc94c7c9dfd6d7e1e51ec4"
  },
  {
    "url": "build/app/gmhvw0y5.css",
    "revision": "f297fd09c89a2097b5619e9243b9d470"
  },
  {
    "url": "build/app/hbp2dgjh.js",
    "revision": "b2b8e66faa587c3a5f240c5f8be8acf3"
  },
  {
    "url": "build/app/hid4ko9s.css",
    "revision": "c283e8e139369189f11e3616960ef7a0"
  },
  {
    "url": "build/app/hleqh4si.css",
    "revision": "9d23fa107251ad60a0fc2f8a8c522673"
  },
  {
    "url": "build/app/hlwgmz6g.css",
    "revision": "a651c3dc36dc897af5a23a9dbc6d0366"
  },
  {
    "url": "build/app/hpecgxgp.js",
    "revision": "7a227afe183768d8799399ab3e61f36c"
  },
  {
    "url": "build/app/hthytjll.css",
    "revision": "9ea3647b356b6bf01b832075af1942d5"
  },
  {
    "url": "build/app/hxfzpqms.js",
    "revision": "6711d2353fc103f82c178378f1f661ec"
  },
  {
    "url": "build/app/i9gpwjnp.css",
    "revision": "da6b9d8ddc0e6333f7e33243b8bf8dd8"
  },
  {
    "url": "build/app/i9uupwu1.js",
    "revision": "41d76f1454e1864837a07e4a7df01688"
  },
  {
    "url": "build/app/igw1bpbv.css",
    "revision": "b1776bfc76514a034876f7533b9255d6"
  },
  {
    "url": "build/app/inuypkmr.css",
    "revision": "19257270822bf732a02cea6114886da9"
  },
  {
    "url": "build/app/iyaucfek.css",
    "revision": "ca76ec8a1e10a839f095bf4fb9ae72ae"
  },
  {
    "url": "build/app/jmmxshp5.js",
    "revision": "5d67437f7beede01fcd02a114ca60b94"
  },
  {
    "url": "build/app/jthhebfb.css",
    "revision": "e64fc06d64e43273c0737815f26b60ca"
  },
  {
    "url": "build/app/jwfjsmop.css",
    "revision": "bc3b25cedbaa764c1e981715d1355013"
  },
  {
    "url": "build/app/klxg2xer.js",
    "revision": "4c29ff3d0516c2fd0a09c18eb677572e"
  },
  {
    "url": "build/app/ksufjpux.css",
    "revision": "8566dee8f7059e916ffd81d73014aebb"
  },
  {
    "url": "build/app/lylgdzho.css",
    "revision": "c2264e7363fbfcf86aafbe9cd7862320"
  },
  {
    "url": "build/app/maqkzelk.css",
    "revision": "766d0c9f1a6cab54c0b53bcb3adb69ba"
  },
  {
    "url": "build/app/mobtb1ta.css",
    "revision": "dc8b6ab953c81b4b104833f94d82b06a"
  },
  {
    "url": "build/app/mql1fbi8.css",
    "revision": "086a8feefc7b3574e2afd8f4139d0a68"
  },
  {
    "url": "build/app/my2nbi8a.js",
    "revision": "fc5ae66737edef39f6305f82bc0d7040"
  },
  {
    "url": "build/app/n0efedrw.css",
    "revision": "cba26a844d33526ed68e9732a2bca91c"
  },
  {
    "url": "build/app/n7znxsls.css",
    "revision": "81e6c3bc53b71059762c72404f8615e3"
  },
  {
    "url": "build/app/o4tnwai4.css",
    "revision": "75e02147c03175f4f333aa2ef13f0026"
  },
  {
    "url": "build/app/ogegrjd8.js",
    "revision": "57ca75aefb83964ee363400a1d10464d"
  },
  {
    "url": "build/app/onpxyelt.css",
    "revision": "b6d6bbb6d61a59a2fa66bd6b795a5ca2"
  },
  {
    "url": "build/app/opqnadal.css",
    "revision": "178111350981a79fc0659d5c713dfbd7"
  },
  {
    "url": "build/app/ovc1rjpb.css",
    "revision": "6dd2be65d0fc4f0d47a37b7659d8e234"
  },
  {
    "url": "build/app/ow25j8t0.css",
    "revision": "c5ac672ba824005aa4e6ac05108664eb"
  },
  {
    "url": "build/app/p7azrhos.css",
    "revision": "38acb25ecb01ad93df92b32f966eadc3"
  },
  {
    "url": "build/app/pakudkaw.css",
    "revision": "0a4d60e226a43204d5746d27d1b4dd70"
  },
  {
    "url": "build/app/pbdepqdg.js",
    "revision": "de961ba0725433a368f1133f30481a70"
  },
  {
    "url": "build/app/pgomunr3.css",
    "revision": "4b48b87df44c34ddb46a74ad938b2bfe"
  },
  {
    "url": "build/app/po4gctgr.css",
    "revision": "b9c3a83330ae948e83aea0eef61cb59c"
  },
  {
    "url": "build/app/pvidp8er.js",
    "revision": "010b59dc81ec68507c24dfbe656e909f"
  },
  {
    "url": "build/app/pwy3u1fv.css",
    "revision": "3aa72a73c97ac47d9df1d839146a4d31"
  },
  {
    "url": "build/app/q7vnkbpo.css",
    "revision": "d6fd47e9edea78daa8c672cf54c1ff19"
  },
  {
    "url": "build/app/qekhqmnv.css",
    "revision": "2a13b19c09b652ae0506b97fd0aa0fbd"
  },
  {
    "url": "build/app/qezwi11y.js",
    "revision": "1c70943c80e8ab8aa425463d4248636b"
  },
  {
    "url": "build/app/qfngy8zv.css",
    "revision": "f2563334372d760cbda29d0159e0df74"
  },
  {
    "url": "build/app/qnsivgok.css",
    "revision": "501c074a4789ee5bbf729e149bb32739"
  },
  {
    "url": "build/app/qwenaxla.css",
    "revision": "b32ac154fe7bf50f4e78f7fd60f2bc8f"
  },
  {
    "url": "build/app/r97ij9mc.js",
    "revision": "1727230c36f7d6b8ad8fb08db731eff3"
  },
  {
    "url": "build/app/r9nc1dgu.js",
    "revision": "590f185ab5b3a7013ebc755102b3c385"
  },
  {
    "url": "build/app/sadehnky.css",
    "revision": "ee3309bd62fcec6c6c80fb182c0ce401"
  },
  {
    "url": "build/app/soucwmpz.js",
    "revision": "5ab997ecd1133ddbcb6f6450d6049a2b"
  },
  {
    "url": "build/app/sqissqfq.css",
    "revision": "5d95b2e8b039cf01c7e86e5c44f84672"
  },
  {
    "url": "build/app/sw8c1gzm.css",
    "revision": "b6e44a79615a021472c9de4e63ce2db5"
  },
  {
    "url": "build/app/t0u2oupf.js",
    "revision": "d204219a6cc05889c3927f0cfe8c8410"
  },
  {
    "url": "build/app/taqqg0q6.js",
    "revision": "cf729e38aa1b20dde79c60f2de171daa"
  },
  {
    "url": "build/app/tei0pcfk.js",
    "revision": "3a880196ef062e684cfb67b05e9edc03"
  },
  {
    "url": "build/app/uexh0aux.js",
    "revision": "ed9e4c75de7c4ec3931f69b176dac6cd"
  },
  {
    "url": "build/app/ufcwkqek.css",
    "revision": "a7a690003ddb15deb591d3713a294d4b"
  },
  {
    "url": "build/app/uqrxsyxw.css",
    "revision": "182bb1b7cbb6de1cd0568c48bc6f1075"
  },
  {
    "url": "build/app/utly53m5.css",
    "revision": "45b042526b68ec18631b2c4c48244cfc"
  },
  {
    "url": "build/app/vendor/swiper.js",
    "revision": "f44ae3024a4323c4f98e7b69cefeee47"
  },
  {
    "url": "build/app/w2egy1rg.js",
    "revision": "5a181cbc412e10488558b20aab0ff24e"
  },
  {
    "url": "build/app/wpmzw6ar.css",
    "revision": "a62031ef78a4c16ee1a3ebfde1b9a582"
  },
  {
    "url": "build/app/wrkfxzcm.css",
    "revision": "4303972a2f5c556d2d956ed0f7418bb5"
  },
  {
    "url": "build/app/wzhdu3bt.css",
    "revision": "a38e76ff48231aa1b8bb35ae31bc7a15"
  },
  {
    "url": "build/app/xkzlyvlq.js",
    "revision": "cb6e6c60353ea42ec44a669e2c53c776"
  },
  {
    "url": "build/app/yuktf4ka.js",
    "revision": "20c7cb42ecd0c11ce462ed56fe40194b"
  },
  {
    "url": "build/app/yxlhlayr.css",
    "revision": "13ad0c81617c432e1681819cef7c26f3"
  },
  {
    "url": "build/app/yyimrv1e.css",
    "revision": "21e85880d481be7e7bdd0138f101cdcd"
  },
  {
    "url": "build/app/z4mrascm.css",
    "revision": "21806ea829f0bd84dae9e3789003338a"
  },
  {
    "url": "build/app/zopkklvw.js",
    "revision": "f655b263d7e3a85478253154124ba0cc"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "images/bars.jpeg",
    "revision": "cf59119f8776167d649c5a640966d535"
  },
  {
    "url": "images/beers.jpeg",
    "revision": "4ae6aa659b21bd9df487e10fd7077bae"
  },
  {
    "url": "index.html",
    "revision": "b28246678dd96cf412b292f72c5bf261"
  },
  {
    "url": "manifest.json",
    "revision": "c1d318cee3e66000978b35d24e89ee48"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
