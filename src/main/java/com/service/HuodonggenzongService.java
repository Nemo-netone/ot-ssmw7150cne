package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.HuodonggenzongEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.HuodonggenzongVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.HuodonggenzongView;


/**
 * 活动跟踪
 *
 * @author 
 * @email 
 * @date 2025-01-25 16:55:24
 */
public interface HuodonggenzongService extends IService<HuodonggenzongEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<HuodonggenzongVO> selectListVO(Wrapper<HuodonggenzongEntity> wrapper);
   	
   	HuodonggenzongVO selectVO(@Param("ew") Wrapper<HuodonggenzongEntity> wrapper);
   	
   	List<HuodonggenzongView> selectListView(Wrapper<HuodonggenzongEntity> wrapper);
   	
   	HuodonggenzongView selectView(@Param("ew") Wrapper<HuodonggenzongEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<HuodonggenzongEntity> wrapper);

   	

}

