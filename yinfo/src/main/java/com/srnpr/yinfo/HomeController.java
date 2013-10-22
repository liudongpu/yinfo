package com.srnpr.yinfo;



import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.srnpr.zapweb.webmethod.RootControl;
import com.srnpr.zapweb.webmethod.WebMethod;

@Controller
public class HomeController extends RootControl {
	
	
	private static final WebMethod web_method = new WebMethod();
	
	/**
	 * 后台
	 * 
	 * @param sUrl
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/yinfo/{url}")
	public String yinfo(@PathVariable("url") String sUrl, Model model,
			HttpServletRequest request) {
		//model.addAttribute("b_method", web_method);
		
		String[] sSplit=sUrl.split("-");
		
		Map<String, Object> map=new HashMap<String, Object>();
		
	
		map.put("PageMethod", web_method);
		
		map.put("PageTarget", sSplit[1]);
		
		model.addAttribute("WebPage", map);
		
		
		return "yinfo/base_page" ;
	}
	
}
