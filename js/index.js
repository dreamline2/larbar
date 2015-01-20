var LARBAR = ( typeof LARBAR === "undefined" ) ? {} : LARBAR

LARBAR = {

	// 中獎數量
	bingonumber: 0,
	result_bingo: [],
	result: [],
	machineAry: [],
	machineConfig: [{
		active: 0,
		delay: 500,
		randomize: LARBAR.randomize
	},{
		active: 0,
		delay: 500,
		randomize: LARBAR.randomize
	},{
		active: 0,
		delay: 500,
		randomize: LARBAR.randomize
	},{
		active: 0,
		delay: 500
	},{
		active: 0,
		delay: 500,
		randomize: LARBAR.randomize
	},{
		active: 0,
		delay: 500
	},{
		active: 0,
		delay: 500
	},{
		active: 0,
		delay: 500
	},{
		active: 0,
		delay: 500,
		randomize: LARBAR.randomize
	}],

	randomize: function (activeElementIndex) {
		return 0;
	},

	// 計算中獎數字
	bingo: function (result) {

		// 中獎比對模型
		if ( result[0] == result[1] && result[1] == result[2]) {
			LARBAR.bingonumber+=1;
		} 

		if (result[0] == result[4] && result[4] == result[8]) {
			LARBAR.bingonumber+=1;
		} 

		if (result[0] == result[3] && result[3] == result[6]) {
			LARBAR.bingonumber+=1;
		} 

		if (result[1] == result[4] && result[4] == result[7]) {
			LARBAR.bingonumber+=1;
		} 

		if (result[2] == result[5] && result[5] == result[8]) {
			LARBAR.bingonumber+=1;
		} 

		if (result[2] == result[4] && result[4] == result[6]) {
			LARBAR.bingonumber+=1;
		}

		if (result[6] == result[7] && result[7] == result[8]) {
			LARBAR.bingonumber+=1;
		} 

		if (result[3] == result[4] && result[4] == result[5]) {
			LARBAR.bingonumber+=1;
		}

		console.log("==================== 抽獎結果 =====================");

		switch (LARBAR.bingonumber) {

			case 0:
				console.log("謝謝再光臨妖怪村，再試試手氣。(╯-_-)╯ ~╩╩ ");
				break;
			case 1:
				console.log("有一條連線，恭喜中了八奨！╮(－_－)╭");
				break;
			case 2:
				console.log("有兩條連線，恭喜中了七奨！ㄟ(￣▽￣ㄟ) ");
				break;
			case 3:
				console.log("有三條連線，恭喜中了六奨！Σ(￣□￣； ");
				break;
			case 4:
				console.log("有四條連線，恭喜中了五奨！◎_◎");
				break;
			case 5:
				console.log("有五條連線，恭喜中了四奨！(O_o)?? ");
				break;
			case 6:
				console.log("有六條連線，恭喜中了三奨！(⊙ˍ⊙) ");
				break;
			case 7:
				console.log("有八條連線，恭喜中了二奨！Σ( ° △ °|||)︴");
				break;

			default: 
				console.log("恭喜中了一獎!!!!‧★,:*:‧\(￣▽￣)/‧:*‧°★*　");
				break;
		}

		console.log("==================== 抽獎結束 =====================");
	}

}

$(function(){

	for (var i = 1; i <= 5; i++) {
		$('.light').append("<div class='light1'>拉霸機閃燈" + i + "</div>").append("<div class='light2'>拉霸機閃燈" + i + "</div>");
	}

	for (var i = 0; i < 9; i++) {
		LARBAR.machineAry[i] = $("#machine" + (i+1) ).slotMachine(LARBAR.machineConfig[i]);
	};


	$('#click_bar').click(function() {
		
		LARBAR.bingonumber = 0;
		LARBAR.result_bingo = [];

		for (var i = 0; i < 9; i++) {
			LARBAR.machineAry[i].shuffle(5, function (result) {
				LARBAR.result_bingo.push(result)
				if (LARBAR.result_bingo.length == 8) {
					LARBAR.bingo(LARBAR.result_bingo)
				}
			});
		};
		
	});

});