package com.dao;

import com.entity.HuodongguanliyuanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.HuodongguanliyuanVO;
import com.entity.view.HuodongguanliyuanView;


/**
 * 活动管理员
 * 
 * @author 
 * @email 
 * @date 2025-01-25 16:55:23
 */
public interface HuodongguanliyuanDao extends BaseMapper<HuodongguanliyuanEntity> {
	
	List<HuodongguanliyuanVO> selectListVO(@Param("ew") Wrapper<HuodongguanliyuanEntity> wrapper);
	
	HuodongguanliyuanVO selectVO(@Param("ew") Wrapper<HuodongguanliyuanEntity> wrapper);
	
	List<HuodongguanliyuanView> selectListView(@Param("ew") Wrapper<HuodongguanliyuanEntity> wrapper);

	List<HuodongguanliyuanView> selectListView(Pagination page,@Param("ew") Wrapper<HuodongguanliyuanEntity> wrapper);

	
	HuodongguanliyuanView selectView(@Param("ew") Wrapper<HuodongguanliyuanEntity> wrapper);
	

}
