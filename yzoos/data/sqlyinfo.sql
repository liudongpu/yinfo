select * from zw_field where view_code='v_y_info';





update zw_field, (select a.*, concat('a', a.field_name) as oo from zw_field a inner join zw_field b on a.uid=b.uid and a.view_code='v_y_info') c
set zw_field.source_code = c.source_code ,
zw_field.field_type_aid = c.field_type_aid ,
zw_field.source_param = c.source_param,
zw_field.regex_value = c.regex_value
where 
zw_field.view_code ='v_change_y_info' and 
zw_field.field_name=c.field_name
;

update zw_field set sort_edit=0 where view_code='v_change_y_info' and LOCATE(field_name,
',domain,area,money_cid,peopletype_cid,score,icon_cids,adv_cid,show_flag,send_info,sign_status,')>0;