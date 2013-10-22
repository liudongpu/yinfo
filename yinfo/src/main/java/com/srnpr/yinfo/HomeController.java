package com.srnpr.yinfo;



import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.srnpr.ylib.method.WebMethod;
import com.srnpr.ylib.model.PageRequest;
import com.srnpr.zapweb.webmethod.RootControl;



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
		
	
		map.put("PageExec", web_method);
		
		map.put("PageTarget", sSplit[0]);
		
		map.put("Url_Option", sSplit[1]);
		
		PageRequest wRequest = new PageRequest();
		
		/*
		if(sPath.indexOf('-')>-1)
		{
			String[] sSplitPaths=sPath.split("-");
			wRequest.inSet(EWebSet.Url_Path, sSplitPaths[0]);
			wRequest.inSet(EWebSet.Url_Show, sSplitPaths[1]);
			
		}
		else
		{
			wRequest.inSet(EWebSet.Url_Path, sPath);
			wRequest.inSet(EWebSet.Url_Show, "");
		}
		*/
		
		String[] sParams = sUrl.split("-");
		wRequest.inSet("Url_Target", sParams[0]);
		wRequest.inSet("Url_View", sParams[1]);
		
		

		if (sParams.length > 2) {
			wRequest.inSet("Url_Option", sParams[2]);
			if (sParams.length > 3) {
				wRequest.inSet("Url_Param", sParams[3]);
				

				if(sParams.length>4)
				{
					wRequest.inSet("Url_Pagination", sParams[4]);
					
					
					if(sParams.length>5)
					{
						wRequest.inSet("Url_Query", sParams[5]);
					}
				}
				
			}
		}
		
		map.put("PageInfo", wRequest);
		
		model.addAttribute("WebPage", map);
		
		
		return "yinfo/base_page" ;
	}
	
}
