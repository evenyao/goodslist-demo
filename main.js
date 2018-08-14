// 定义一个获取数据的函数 getData()
function getData(){
  var results = []  //定义一个空的列表，用来存放数据
  for (var i = 0 ; i < 3; i++ ){
    var rand = parseInt(Math.random()*100 + 1)  //定义一个 随机生成数 rand
    var info = {
      img: '//picsum.photos/200/200/?image=' + rand,  // 定义商品图片，随机生成图片链接的 url 地址
      name: '热款商品',      //定义商品名，固定为热款商品
      price: '￥' + rand   //定义商品价格，为刚才的随机数
    }
    results.push(info)
  }
  return results
}

// 定义添加商品的HTML函数，即修改DOM的函数
function setGoodsHtml(goods){
  var html = '';
  html += '<li class="goods">'
  html +=   '<div class="cover"><a class="btn action-delete" href="#">删除</a></div>'
  html +=    '<a href="#">'
  html +=      '<img src="'+goods.img+'" alt="">'
  html +=      '<div class="goods-name">'+goods.name+'</div>'
  html +=      '<div class="goods-price">'+goods.price+'</div>'
  html +=    '</a>'
  html += '</li>'
  return html
}


$('.btn-add').on('click',function(e){
  e.preventDefault()
  $('.goods').removeClass('hover') //在进行添加的时候，关闭所有帷幕效果
  var infos = getData()  //将getData()取到的数据，传给定义的变量infos
  $.each(infos,function(index,goods){
    var html = setGoodsHtml(goods)
    $('.goods-all').append(html)
  })
})


//编辑 - 删除 事件，还是使用事件代理，注意切换两个Class，一个hover帷幕显示，一个删除按钮显示
$('.btn-edit').on('click',function(e){
  e.preventDefault()
  $('.goods').toggleClass('hover')
  $('.action-delete').toggleClass('active')
})


//在.goods-all上做事件代理，因为考虑到有新增的li标签，所以在父级上绑定事件。点击.action-delete，删除
$('.goods-all').on('click','.action-delete',function(e){
  e.preventDefault()
  $(this).parents('.goods').remove()
})
