$(function() {
	//支付方式选择
	$(document).on("pageInit", "#page-payment", function(e, id, page) {
		$(page).on('click', ".paybox_weixin", function() {
			$('.msl-weixin').show();
			$('.msl-zhifubao').hide();
		});
		$(page).on('click', ".paybox_zhifubao", function() {
			$('.msl-zhifubao').show();
			$('.msl-weixin').hide();
		});

	});
	//提交订单  温馨提示
	$(document).on("pageInit", "#page-memberac", function(e, id, page) {
		$(page).on('click', '.open-2-modal', function() {
			$.modal({
				title: '温馨提示',
				text: '<p class="text-left">附近300m有家分店，建议您到店自提，免去配送费，是否查看分店地址？</p>',
				buttons: [{
					text: '继续支付',
					onClick: function() {
						$.alert('支付成功!')
					}
				}, {
					text: '查看',
					bold: true,
					onClick: function() {
						$.modal({
							title: '附近门店自提',
							text: '<p class="text-left">距离：300m</p><p class="text-left">电话:137****4988</p><p class="text-left">地址：浙江省杭州市滨江区滨文路558号</p>',
							buttons: [{
								text: '取消',
							}, {
								text: '自提并支付',
								bold: true,
								onClick: function() {
									$.alert('支付成功！')
								}
							}, ]
						})
					}
				}, ]
			})
		});
	});
	//点击评论
	$(document).on("pageInit", "#page-milkdiscuss", function(e, id, page) {
		$('.msl-search-input').on("click", function(e) {
			$('.searchbar .msl-search-input').removeClass("col-40");
			$('.searchbar .msl-search-input').addClass("col-75");
			$('.dis-none').show();
			$('.msl-toggle').hide();
			
			
		    
			
			$(document).on("click", function() {
				$('.searchbar .msl-research-input').removeClass("col-75");
				$('.searchbar .msl-research-input').addClass("col-40");
				$('.dis-none').hide();
				$('.msl-toggle').show();
				$('.msl-toggle').animate({width:"1000px"});
			});
			e.stopPropagation();
		});
		
		$('.msl-discuss-bar-footer').on("click", function(e) {
			e.stopPropagation();
		});
	});





	$.init();
});