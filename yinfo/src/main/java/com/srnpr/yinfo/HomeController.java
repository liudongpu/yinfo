package com.srnpr.yinfo;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mchange.v2.c3p0.impl.NewPooledConnection;
import com.srnpr.ylib.call.PageProcess;
import com.srnpr.ylib.method.WebMethod;
import com.srnpr.ylib.model.PageRequest;
import com.srnpr.zapcom.basemodel.MDataMap;
import com.srnpr.zapweb.webmethod.RootControl;
import com.srnpr.zapweb.webpage.RootPage;
import com.srnpr.zapweb.webpage.RootProcess;

@Controller
public class HomeController extends RootControl {

	private static final WebMethod web_method = new WebMethod();

	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@Override
	public String home(Locale locale, Model model) {

		model.addAttribute("b_method", web_method);
		return yinfo("main-main", model,null);
	}

	/**
	 * 后台
	 * 
	 * @param sUrl
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/yinfo/{url}")
	public String yinfo(@PathVariable("url") String sUrl, Model model,HttpServletRequest hRequest) {
		// model.addAttribute("b_method", web_method);

		String[] sSplit = sUrl.split("-");

		Map<String, Object> map = new HashMap<String, Object>();

		map.put("PageExec", web_method);

		map.put("PageTarget", sSplit[0]);

		map.put("Url_Option", sSplit[1]);

		PageRequest wRequest = new PageRequest();


		String[] sParams = sUrl.split("-");
		wRequest.inSet("Url_Target", sParams[0]);
		wRequest.inSet("Url_View", sParams[1]);

		if (sParams.length > 2) {
			wRequest.inSet("Url_Option", sParams[2]);
			if (sParams.length > 3) {
				wRequest.inSet("Url_Param", sParams[3]);

				if (sParams.length > 4) {
					wRequest.inSet("Url_Pagination", sParams[4]);

					if (sParams.length > 5) {
						wRequest.inSet("Url_Query", sParams[5]);
					}
				}

			}
		}
		
		
	
		

		
		
		String sReturnString="";
		
		if(hRequest!=null)
		wRequest.setReqMap(convertRequest(hRequest));

		PageProcess process=new PageProcess();
		
		if(sSplit[0].equals("func"))
		{
			
			model.addAttribute("b_html",process.result(wRequest).ToJsonString());
			
			sReturnString="page/empty";
		}
		else
		{
			
			map.put("PageInfo", process.processPage(wRequest));

			model.addAttribute("WebPage", map);
			
			
			sReturnString="yinfo/base_page";
		}

		return sReturnString;
	}
	
	
	public MDataMap convertRequest(HttpServletRequest hRequest) {
		MDataMap mReqMap = new MDataMap();
		@SuppressWarnings("unchecked")
		Enumeration<String> eKey = hRequest.getParameterNames();

		while (eKey.hasMoreElements()) {
			String string = eKey.nextElement();
			mReqMap.put(string,
					StringUtils.join(hRequest.getParameterValues(string), ","));
		}

		return mReqMap;
	}
	
	
	
	/**
	 * 页面
	 * 
	 * @param sUrl
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/manage")
	public String manageinfo(@PathVariable("url") String sUrl, Model model,
			HttpServletRequest request) {
		return manage("home", model, request);
	}
	
	
	
	/**
	 * 页面
	 * 
	 * @param sUrl
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/changeinfo/{url}")
	public String changeinfo(@PathVariable("url") String sUrl, Model model,
			HttpServletRequest request) {
		RootProcess page_Process=new RootProcess();
		model.addAttribute("b_page", page_Process.process("page_edit_v_change_y_info", request));
		model.addAttribute("b_method", web_method);
		return "page/default";
	}
	
	
	
	
	

}
