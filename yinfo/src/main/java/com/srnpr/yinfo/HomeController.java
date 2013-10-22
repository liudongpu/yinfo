package com.srnpr.yinfo;



import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.srnpr.zapweb.webmethod.RootControl;

@Controller
public class HomeController extends RootControl {
	
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
		
		return "yinfo/page_" + sSplit[1];
	}
	
}
