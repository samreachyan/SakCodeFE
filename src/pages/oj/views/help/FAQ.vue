<template>
  <panel>
    <div slot="title">{{$t('m.Frequently_Asked_Questions')}}</div>
    <div class="content markdown-body">
      <ul>
        <li>{{$t('m.Where_is_the_input_and_the_output')}}
          <p>{{$t('m.Where_is_the_input_and_the_output_answer_part_1')}} <code>stdin</code> ('{{$t('m.Standard_Input')}}') {{$t('m.Where_is_the_input_and_the_output_answer_part_3')}} <code>stdout</code>
            ('{{$t('m.Standard_Output')}}') {{$t('m.Where_is_the_input_and_the_output_answer_part_5')}} <code>scanf</code> {{$t('m.Where_is_the_input_and_the_output_answer_part_6')}} <code>cin</code>
            {{$t('m.Where_is_the_input_and_the_output_answer_part_7')}} <code>printf</code> {{$t('m.Where_is_the_input_and_the_output_answer_part_8')}} <code>cout</code> {{$t('m.Where_is_the_input_and_the_output_answer_part_9')}} <code>{{$t('m.Runtime_Error')}}</code>.
          </p>
        </li>
        <li>អំពីដំណើរការក្នុងប្រព័ន្ធវិនិច្ឆ័យកូដ
          <p> ​សាកកូដ - Sak Code ដាក់ដំណើរជាប្រព័ន្ធវិនិច្ឆ័យកូដ(Online Judge) ជា Open Source ដែលអ្នកអាចចូលរួមអភិវឌ្ឍន៍បាន។ វាអាចវិនិច្ឆ័យចម្លើយរបស់អ្នកនៅក្នុង sandbox(Online Judge) ដែលអាចជួយសម្រួលប្រព័ន្ធដំណើរការប្រសើរជាងមុន មិនមមាញឹកជាមួយ Performance ផ្សេងៗទៀត។
          </p>
          <p>របៀបគណនាពិន្ទុបទពិសោធន៍៖
            <p>1. អ្នកទទួលបានមេគុណ <code>ពិន្ទុ</code> រាល់ពេលចុចយកវត្តមានឬសញ្ញាកន្ទឹងត្រូវនឹងលើកទី <code>3, 7, 15, 30, 60, 90, 120, 240, 365</code> ដែលប្រព័ន្ធយើងនឹងបូកពិន្ទុបទពិសោធន៍តាមលេខរៀង <code>1, 2, 4, 7, 12, 20, 33, 54, 88</code> ដែលវាអនុវត្តតាមច្បាប់ Fibonacci (a2 = a1 + a0)។</p>
            <p>2. តាមរយៈការធ្វើលំហាត់ <strong>ទទួលបានលទ្ធផល AC </strong>នោះប្រព័ន្ធយើងនឹងគណនាបូកបន្ថែមពិន្ទុបទពិសោធន៍（ងាយ, មធ្យម, ពិបាក）តាមលំដាប់ពិន្ទុ <code>3, 8, 15</code> ។</p>
          </p>
          <p>
            ការបែងចែកកម្រិតតាមលំដាប់៖
            <p>0 - 99 : <Tag color="#636e72" style="margin-right:-15px;">Newbie</Tag></p>
            <p>100 - 199 : <Tag color="primary" style="margin-right:-15px;">Pupil</Tag></p>
            <p>200 - 499 : <Tag color="#6c5ce7" style="margin-right:-15px;">Specialist</Tag></p>
            <p>500 - 999 : <Tag color="#1dd1a1" style="margin-right:-15px;">Expert</Tag></p>
            <p>1000 - 4999 : <Tag color="#ff9f43" style="margin-right:-15px;">Candidate Master</Tag></p>
            <p>5000 - 9999 : <Tag color="#ee5253" style="margin-right:-15px;">Master</Tag></p>
            <p>10000 - ∞ : <Tag color="#222f3e" style="margin-right:-15px;">GrandMaster</Tag></p>
          </p>
        </li>
        <li>{{$t('m.What_is_the_meaning_of_submission_execution_time')}}
        <p>{{$t('m.What_is_the_meaning_of_submission_execution_time_answer')}}
        </p>
        </li>
        <li>{{$t('m.How_Can_I_use_CPP_Int64')}}
          <p>{{$t('m.How_Can_I_use_CPP_Int64_answer_part_1')}}<code>long long</code> {{$t('m.How_Can_I_use_CPP_Int64_answer_part_2')}} <code>cin/cout</code> {{$t('m.or')}} <code>%lld</code>, {{$t('m.using')}}<code> __int64</code> {{$t('m.How_Can_I_use_CPP_Int64_answer_part_3')}} <code>{{$t('m.Compile_Error')}}</code>.</p>
        </li>
        <li>{{$t('m.Java_specifications')}}
          <p>{{$t('m.Java_specifications_answer_part_1')}} <code>Main</code> {{$t('m.Java_specifications_answer_part_2')}} <code>Main</code> {{$t('m.Java_specifications_answer_part_3')}}</p>
        </li>
        <li> រាល់ចម្ងល់ ឬ មតិដើម្បីអភិវឌ្ឍន៍បន្ថែមអ្នកអាចចូលរួមបាន៖
          <p>ប្រសិនបើកំឡុងពេល តេស្តសាកល្បងសមត្ថភាព មានបញ្ហាផ្សេងៗ ឬអ្នកមានមតិអ្វីអាចចូលរួមបន្ថែមនៅក្នុង Facebook Group : <a href="https://fb.me/groups/sakcode" >សាកកូដ - Sak Code Communities</a></p>
        </li>
      </ul>
    </div>
  </panel>
</template>

<script>
</script>

<style lang="less" scoped>
  .content {
    font-size: 16px;
    margin: 0 50px 40px 50px;
    > ul {
      list-style: disc;
      li {
        font-size: 16px;
        margin-top: 20px;
        &:first-child {
          margin-top: 0;
        }
        p {
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
  }
</style>
