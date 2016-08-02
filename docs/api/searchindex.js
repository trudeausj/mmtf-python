Search.setIndex({envversion:50,filenames:["index","mmtf","mmtf.api","mmtf.codecs","mmtf.codecs.decoders","mmtf.codecs.encoders","mmtf.converters","mmtf.tests","mmtf.utils","modules","setup"],objects:{"":{mmtf:[1,0,0,"-"]},"mmtf.api":{default_api:[2,0,0,"-"]},"mmtf.api.default_api":{MMTFDecoder:[2,1,1,""],fetch:[2,4,1,""],get_raw_data_from_url:[2,4,1,""],get_url:[2,4,1,""],parse:[2,4,1,""],parse_gzip:[2,4,1,""],ungzip_data:[2,4,1,""]},"mmtf.api.default_api.MMTFDecoder":{atom_counter:[2,2,1,""],chain_counter:[2,2,1,""],decode_data:[2,3,1,""],encode_data:[2,3,1,""],get_msgpack:[2,3,1,""],group_counter:[2,2,1,""],model_counter:[2,2,1,""],pass_data_on:[2,3,1,""]},"mmtf.codecs":{codecs:[3,0,0,"-"],decoders:[4,0,0,"-"],default_codec:[3,0,0,"-"],encoders:[5,0,0,"-"]},"mmtf.codecs.codecs":{ByteToInt:[3,1,1,""],DeltaRecursiveFloat:[3,1,1,""],EncodeString:[3,1,1,""],FourByteToInt:[3,1,1,""],RunLengthChar:[3,1,1,""],RunLengthDeltaInt:[3,1,1,""],RunLengthFloat:[3,1,1,""]},"mmtf.codecs.codecs.ByteToInt":{decode:[3,5,1,""],encode:[3,5,1,""]},"mmtf.codecs.codecs.DeltaRecursiveFloat":{decode:[3,5,1,""],encode:[3,5,1,""]},"mmtf.codecs.codecs.EncodeString":{decode:[3,5,1,""],encode:[3,5,1,""]},"mmtf.codecs.codecs.FourByteToInt":{decode:[3,5,1,""],encode:[3,5,1,""]},"mmtf.codecs.codecs.RunLengthChar":{decode:[3,5,1,""],encode:[3,5,1,""]},"mmtf.codecs.codecs.RunLengthDeltaInt":{decode:[3,5,1,""],encode:[3,5,1,""]},"mmtf.codecs.codecs.RunLengthFloat":{decode:[3,5,1,""],encode:[3,5,1,""]},"mmtf.codecs.decoders":{decoders:[4,0,0,"-"],numpy_decoders:[4,0,0,"-"]},"mmtf.codecs.decoders.decoders":{delta_decode:[4,4,1,""],run_length_decode:[4,4,1,""]},"mmtf.codecs.decoders.numpy_decoders":{delta_decode:[4,4,1,""],run_length_decode:[4,4,1,""]},"mmtf.codecs.default_codec":{decode_array:[3,4,1,""],encode_array:[3,4,1,""]},"mmtf.codecs.encoders":{encoders:[5,0,0,"-"]},"mmtf.codecs.encoders.encoders":{delta_encode:[5,4,1,""],run_length_encode:[5,4,1,""]},"mmtf.converters":{converters:[6,0,0,"-"],numpy_converters:[6,0,0,"-"]},"mmtf.converters.converters":{convert_bytes_to_ints:[6,4,1,""],convert_chars_to_ints:[6,4,1,""],convert_floats_to_ints:[6,4,1,""],convert_ints_to_bytes:[6,4,1,""],convert_ints_to_chars:[6,4,1,""],convert_ints_to_floats:[6,4,1,""],decode_chain_list:[6,4,1,""],encode_chain_list:[6,4,1,""],recursive_index_decode:[6,4,1,""],recursive_index_encode:[6,4,1,""]},"mmtf.converters.numpy_converters":{convert_bytes_to_ints:[6,4,1,""],convert_ints_to_floats:[6,4,1,""],decode_chain_list:[6,4,1,""],recursive_index_decode:[6,4,1,""]},"mmtf.tests":{codec_tests:[7,0,0,"-"]},"mmtf.tests.codec_tests":{CodecTest:[7,1,1,""],ConverterTests:[7,1,1,""],DecoderTests:[7,1,1,""],EncoderTests:[7,1,1,""],run_all:[7,4,1,""]},"mmtf.tests.codec_tests.CodecTest":{test_byte_to_int:[7,3,1,""],test_delt_rec_float:[7,3,1,""],test_enc_str:[7,3,1,""],test_four_byte_int:[7,3,1,""],test_run_len_char:[7,3,1,""],test_run_len_delta_int:[7,3,1,""],test_run_len_float:[7,3,1,""]},"mmtf.tests.codec_tests.ConverterTests":{test_convert_chain_list:[7,3,1,""],test_convert_four_byte_int:[7,3,1,""],test_convert_int_to_char:[7,3,1,""],test_convert_int_to_float:[7,3,1,""],test_convert_one_byte_int:[7,3,1,""],test_convert_two_byte_int:[7,3,1,""],test_decoder:[7,3,1,""],test_encoder:[7,3,1,""],test_fetch:[7,3,1,""],test_gz_decoder:[7,3,1,""],test_gzip_open:[7,3,1,""],test_parse_header:[7,3,1,""],test_recursive_dec:[7,3,1,""],test_recursive_enc:[7,3,1,""],test_round_trip:[7,3,1,""]},"mmtf.tests.codec_tests.DecoderTests":{test_delta_decode:[7,3,1,""],test_empty_delta_decode:[7,3,1,""],test_empty_run_length_decode:[7,3,1,""],test_run_length_decode:[7,3,1,""]},"mmtf.tests.codec_tests.EncoderTests":{test_delta_encode:[7,3,1,""],test_empty_delta_encode:[7,3,1,""],test_empty_run_length_encode:[7,3,1,""],test_run_length_encode:[7,3,1,""]},"mmtf.utils":{codec_utils:[8,0,0,"-"],constants:[8,0,0,"-"],decoder_utils:[8,0,0,"-"]},"mmtf.utils.codec_utils":{add_header:[8,4,1,""],parse_header:[8,4,1,""]},"mmtf.utils.decoder_utils":{add_atom_data:[8,4,1,""],add_atomic_information:[8,4,1,""],add_chain_info:[8,4,1,""],add_entity_info:[8,4,1,""],add_group:[8,4,1,""],add_group_bonds:[8,4,1,""],add_header_info:[8,4,1,""],add_inter_group_bonds:[8,4,1,""],add_xtalographic_info:[8,4,1,""],convert_entity:[8,4,1,""],convert_group:[8,4,1,""],decode_entity_list:[8,4,1,""],decode_group_map:[8,4,1,""],generate_bio_assembly:[8,4,1,""]},mmtf:{api:[2,0,0,"-"],codecs:[3,0,0,"-"],converters:[6,0,0,"-"],tests:[7,0,0,"-"],utils:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:staticmethod"},terms:{"4cup":0,"byte":[3,6,8],"case":[3,7],"char":[3,6],"class":[2,3,7,8],"float":[3,6],"function":[2,3,4,5],"import":0,"int":[4,5,6],"null":3,"return":[2,3,4,5,6,8],"static":3,acro:0,add:[3,8],add_atom_data:8,add_atomic_inform:8,add_chain_info:8,add_entity_info:8,add_group:8,add_group_bond:8,add_head:8,add_header_info:8,add_inter_group_bond:8,add_xtalographic_info:8,after:[2,6],all:8,along:8,ancilliari:8,api:[0,1],appropir:3,appropri:8,arrai:[3,4,5,6,8],atom:[0,8],atom_charg:8,atom_count:2,atom_nam:8,avail:0,back:2,backward:7,base:[2,3,7],binari:0,bio_assembl:0,bioassembl:[0,8],biolog:0,bond:8,bond_indic:8,bond_ord:8,both:7,bytetoint:3,can:[2,7],chain:[0,8],chain_count:2,chain_index:8,chain_len:6,charact:6,charg:[0,8],chemic:2,client:8,code:0,codec:1,codec_id:7,codec_test:1,codec_util:1,codectest:7,compat:0,compress:2,constant:1,convers:6,convert:[1,3],convert_bytes_to_int:6,convert_chars_to_int:6,convert_ent:8,convert_floats_to_int:6,convert_group:8,convert_ints_to_byt:6,convert_ints_to_char:6,convert_ints_to_float:6,convertertest:7,correspond:6,covert:3,crystallograph:8,data:[0,2,8],data_api:8,data_sett:[2,8],datatransferinterfac:[2,8],decod:[0,1,2,3],decode_arrai:3,decode_chain_list:6,decode_data:2,decode_entity_list:8,decode_group_map:8,decoded_data:[0,7],decoder_util:1,decodertest:7,default_api:1,default_codec:1,defin:6,delta:[3,4,5],delta_decod:4,delta_encod:5,deltarecursivefloat:3,dict:2,divid:6,divis:6,each:6,element:8,element_nam:8,encod:[0,1,2,3],encode:[2,3],encode_arrai:3,encode_chain_list:6,encode_data:2,encoded_data:7,encodertest:7,encodestr:3,encood:3,entiti:8,entropi:2,fed:2,fetch:[0,2],file:2,file_path:2,fill:2,first:0,follow:0,form:6,formal:8,formalchargelist:0,fornt:3,forward:7,four:3,fourbytetoint:3,from:[0,2,8],gener:8,generate_bio_assembl:8,get:[0,2,8],get_msgpack:2,get_raw_data_from_url:2,get_url:2,getter:2,given:[2,7],group:[0,8],group_atom_ind:8,group_count:2,group_index:8,group_list:0,groupnam:0,gzip:2,gzipe:2,header:[3,8],hold:0,how:0,in_arrai:[3,4,5],in_byt:6,in_char:6,in_float:6,in_int:6,in_str:6,index:[0,3,6,8],indic:8,individu:8,info:8,inform:[0,8],inptut:5,input:[2,3,4,6,8],input_arrai:[3,8],input_data:[2,8],input_ent:8,input_group:8,instal:0,instead:3,int_arrai:6,integ:[3,4,5,6],inter:8,interfac:8,inut:5,join:0,len:0,lenght:3,length:[3,4,5,6,8],less:3,librari:0,list:[6,8],mani:0,map:8,max:6,maximum:6,method:3,methodnam:7,min:6,minimum:6,minu:8,mmtfdecod:2,model:2,model_count:2,modul:0,msgpack:2,multipli:6,name:[0,8],num:6,num_chain:0,number:[0,6],numpy_convert:1,numpy_decod:[1,3],object:[2,3,8],olecular:0,onto:2,order:8,ormat:0,other:2,pack:6,page:0,pair:8,param:[2,3,4,6,7,8],paramet:[2,3,4,5,6,8],pars:[2,3,8],parse_gzip:2,parse_head:8,pass_data_on:2,path:2,pdb:[0,2],pdb_id:2,per:6,perform:3,pip:0,place:2,point:6,precisison:6,prepend:8,print:0,produc:6,push:8,put:8,quick:0,ransmiss:0,raw:2,recurs:[3,6],recursive_index_decod:6,recursive_index_encod:6,regula:8,regular:8,remaind:8,repositori:0,retrun:2,round:7,run:[3,4,5],run_al:7,run_length_decod:4,run_length_encod:5,runlengthchar:3,runlengthdeltaint:3,runlengthfloat:3,runtest:7,search:0,seri:2,set:3,setter:2,setup:9,show:0,singl:3,size:6,specifi:8,start:[0,8],store:3,str:0,string:[2,3,6,8],struct_infl:8,structur:[0,2,8],structure_id:0,submodul:1,test:1,test_byte_to_int:7,test_convert_chain_list:7,test_convert_four_byte_int:7,test_convert_int_to_char:7,test_convert_int_to_float:7,test_convert_one_byte_int:7,test_convert_two_byte_int:7,test_decod:7,test_delt_rec_float:7,test_delta_decod:7,test_delta_encod:7,test_empty_delta_decod:7,test_empty_delta_encod:7,test_empty_run_length_decod:7,test_empty_run_length_encod:7,test_enc_str:7,test_encod:7,test_fetch:7,test_four_byte_int:7,test_gz_decod:7,test_gzip_open:7,test_parse_head:7,test_recursive_dec:7,test_recursive_enc:7,test_round_trip:7,test_run_len_char:7,test_run_len_delta_int:7,test_run_len_float:7,test_run_length_decod:7,test_run_length_encod:7,testcas:7,than:3,thi:[0,2,3,8],trip:7,type:2,ungzip_data:2,unit_test:7,unittest:7,unpack:[2,6],url:2,util:1,wai:7,where:8,whole:8,within:8,work:7,write:2},titles:["Welcome to mmtf-python&#8217;s documentation!","mmtf package","mmtf.api package","mmtf.codecs package","mmtf.codecs.decoders package","mmtf.codecs.encoders package","mmtf.converters package","mmtf.tests package","mmtf.utils package","mmtf-python","setup module"],titleterms:{api:2,codec:[3,4,5],codec_test:7,codec_util:8,constant:8,content:[1,2,3,4,5,6,7,8],convert:6,decod:4,decoder_util:8,default_api:2,default_codec:3,document:0,encod:5,indice:0,mmtf:[0,1,2,3,4,5,6,7,8,9],modul:[1,2,3,4,5,6,7,8,10],numpy_convert:6,numpy_decod:4,packag:[1,2,3,4,5,6,7,8],python:[0,9],setup:10,submodul:[2,3,4,5,6,7,8],subpackag:[1,3],tabl:0,test:7,util:8,welcom:0}})