package com.srnpr.ylib.model;

public enum EWebSet {


	
	 /**
	 * @fields Url_Path  Url路径  一般指向项目名称
	 */
		
	Url_Path,
	
	/*
	 * @fields Url_Show  展示方式 Path第二参数  默认为空
	 */
	Url_Show,
	
	
	
	 /**
	 * @fields Url_Target  Url第一参数  一般设定为操作类型
	 */
		
	Url_Target,
	
	
	
	 /**
	 * @fields Url_View Url第二参数  一般设定为操作视图
	 */
		
	Url_View,
	
	
	 /**
	 * @fields Url_Option Url第三参数  一般设定为操作指令唯一编码
	 */
		
	Url_Option,
	
	 /**
	 * @fields Url_Param  Url第四参数  如果修改时设置为唯一值 可为空
	 */
		
	Url_Param,
	
	 /**
	  * @fields Url_Pagination  Url第五参数  分页设置  格式为   页码_总条数_每页数字
	 */
			
	Url_Pagination,
	
	
	
	/**
	  * @fields Url_Query  Url第六参数  格式为a=a&b=b
	 */
			
	Url_Query,


	Request_Method


}
