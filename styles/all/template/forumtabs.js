$(document).ready(function(){
		$('#tabs div.forabg').each(function(){
			var name = $(this).children().children().children().children().children().html();
			split_name = name.split('<div class="list-inner">');
			split_2 = split_name[1].split('</div>');
			split_3 = split_2[0].split('</a');
			split_4 = split_3[0].split('>');
			split_5 = split_4[split_4.length-1];
			cat_name = split_5.replace(/\s+/g, '');
			$(this).attr('id', 'tabs-' + cat_name);
		});
	});