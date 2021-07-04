<template>
  <panel>
    <div slot="title">{{$t('m.AboutUs')}}</div>
    <div v-katex v-html="aboutus.content" class="content markdown-body"></div>
    <div class="content markdown-body update_time"></div>
    <div class="content">
      <h3>ក្រុមការងារស្ម័គ្រចិត្ត</h3>
      <div class="flex-container">
        <div class="card">
          <img style="width=250px; height: 180px; border-radius: 25px;" src="https://avatars.githubusercontent.com/u/32268364?v=4" />
          <a href="https://fb.me/yan.samreach"><h4>Yan Samreach</h4></a>
          <p>Web Developer</p>
        </div>
        <div class="card">
          <img style="width=250px; height: 180px; border-radius: 25px;" src="https://avatars.githubusercontent.com/u/32268364?v=4" />
          <a href="https://fb.me/yan.samreach"><h4>Yan Samreach</h4></a>
          <p>Content Creator</p>
        </div>
        <div class="card">
          <img style="width=250px; height: 180px; border-radius: 25px;" src="https://avatars.githubusercontent.com/u/32268364?v=4" />
          <a href="https://fb.me/yan.samreach"><h4>Yan Samreach</h4></a>
          <p>Technical Supporter</p>
        </div>
        <div class="card">
          <img style="width=250px; height: 180px; border-radius: 25px;" src="https://avatars.githubusercontent.com/u/32268364?v=4" />
          <a href="https://fb.me/yan.samreach"><h4>Yan Samreach</h4></a>
          <p>Technical Supporter</p>
        </div>
      </div>
    </div>
  </panel>
</template>

<script>
  import api from '@oj/api'
  import Pagination from '@oj/components/Pagination'

  export default {
    name: 'AboutUs',
    components: {
      Pagination
    },
    data () {
      return {
        aboutus: ''
      }
    },
    mounted () {
      api.getAboutUs().then(res => {
        if (res.data.data) {
          this.aboutus = res.data.data
        } else {
          this.onit = true
        }
      }).catch(() => {
      })
    }
  }
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

    > .flex-container {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    > .flex-container
      > .card {
        background-color: #f1f1f1;
        border: solid 2px rgb(240, 13, 221);
        margin: 10px;
        border-radius: 25px;
        padding: 20px;
        font-size: 30px;
        & > a {
          text-decoration: none;
        }
        & > a > h4:hover {
          color: rgb(240, 13, 221);
        }
        & > a > h4 {
          font-size: 18px;
          text-align: center;
          color: rgb(129, 6, 245);
        }
        & > p {
          font-size: 15px;
          text-align: center;
        }
      }
      & .card:hover {
        background-color: transparent;
        border-color: rgb(129, 6, 245);
      }

  }

  .update_time{
    text-align:right;
  }
</style>
