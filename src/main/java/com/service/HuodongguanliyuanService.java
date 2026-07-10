package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.HuodongguanliyuanEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.HuodongguanliyuanVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.HuodongguanliyuanView;


/**
 * 活动管理员
 *
 * @author 
 * @email 
 * @date 2025-01-25 16:55:23
 */
public interface HuodongguanliyuanService extends IService<HuodongguanliyuanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<HuodongguanliyuanVO> selectListVO(Wrapper<HuodongguanliyuanEntity> wrapper);
   	
   	HuodongguanliyuanVO selectVO(@Param("ew") Wrapper<HuodongguanliyuanEntity> wrapper);
   	
   	List<HuodongguanliyuanView> selectListView(Wrapper<HuodongguanliyuanEntity> wrapper);
   	
   	HuodongguanliyuanView selectView(@Param("ew") Wrapper<HuodongguanliyuanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<HuodongguanliyuanEntity> wrapper);

   	

}

