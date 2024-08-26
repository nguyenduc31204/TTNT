import React , { useRef } from 'react'
import { Link } from 'react-router-dom';

"use client"
 
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const Home = () => {

  // Tạo các ref để tham chiếu đến các input
  const luongMuaRef = useRef(null);
  const nhietDoRef = useRef(null);
  const cungRef = useRef(null);
  const cauRef = useRef(null);

  const handleSubmit = () => {
     // Lấy giá trị từ các input
     const luongMua = parseFloat(luongMuaRef.current.value);
     const nhietDo = parseFloat(nhietDoRef.current.value);
     const cung = parseFloat(cungRef.current.value);
     const cau = parseFloat(cauRef.current.value);
 
     // Kiểm tra nếu có giá trị không hợp lệ
     if (isNaN(luongMua) || isNaN(nhietDo) || isNaN(cung) || isNaN(cau)) {
       console.error("Vui lòng nhập đầy đủ và chính xác các giá trị.");
       return;
     }

    // Hiển thị giá trị ra console
    console.log('Lượng mưa:', luongMua);
    console.log('Nhiệt độ:', nhietDo);
    console.log('Khả năng cung cấp:', cung);
    console.log('Nhu cầu sử dụng:', cau);
  };

  return (
    
    <div className='flex flex-col items-center'>
        <div>
          <h1 className='font-bold py-10 '>BÀI TẬP LỚN: DỰ ĐOÁN GIÁ CÀ PHÊ ÁP DỤNG BÀI TOÁN CÂY QUYẾT ĐỊNH
          
          </h1>
        </div>
        <div>
          <h1>Dữ liệu dự đoán từ các năm</h1>
        </div>
        <div className='flex flex-1 gap-10 py-10'>
        <Link to="/mua" className='w-full'>
          <Button className='border border-sky-500 p-10' variant="secondary">
           Lượng mưa
          </Button>
        </Link>
        <Link to="/nhiet" className='w-full'>
          <Button className='border border-sky-500 p-10' variant="secondary">
           Nhiệt độ
          </Button>
        </Link>
        <Link to="/xk" className='w-full'>
          <Button className='border border-sky-500 p-10' variant="secondary">
           Khả năng cung cấp
          </Button>
        </Link>
        <Link to="/nhucau" className='w-full'>
          <Button className='border border-sky-500 p-10' variant="secondary">
           Nhu cầu
          </Button>
        </Link>
        <Link to="/nk" className='w-full'>
          <Button className='border border-sky-500 p-10' variant="secondary">
           Mức giá
          </Button>
        </Link>
          
          
        </div>

        <h1>Dữ liệu dự đoán của năm nay</h1>

        <div className='flex items-center gap-3 p-4'>
          <div className='flex flex-col'>
            <label htmlFor="luongmua">Lượng mưa</label>
            <input type='number' id='luongmua' ref={luongMuaRef} />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="nhietdo">Nhiệt độ</label>
            <input type='number' id='nhietdo' ref={nhietDoRef} />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="cung">Khả năng cung cấp</label>
            <input type='number' id='cung' ref={cungRef} />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="cau">Nhu cầu sử dụng</label>
            <input type='number' id='cau' ref={cauRef} />
          </div>
          <button
            id='submit'
            className='border border-sky-500 px-5 py-2 rounded-sm bg-slate-800 text-slate-50'
            onClick={handleSubmit}>
            Dự đoán
          </button>
        </div>

        
    </div>
  )
}

export default Home