<template>
  <div class="list">
    <v-navbar />
    <section class="list_area">
      <div class="list_left">
        <ul class="left_wrap">
          <li class="left_item" v-for="(value, index) in list_left" :key="index">
            <span class="item_name" :style="{ color: colors[value.id] }">{{ value.name }}</span>
            <ul class="child_wrap">
              <li
                class="child_item"
                v-for="(childValue, childIndex) in value.child"
                :key="childIndex"
              >
                <span class="item_name" :style="{ color: childColors[childValue.id] }">
                  {{ childValue.name }}
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="list_right">
        <h3 class="right_head">Completed Bookings</h3>
        <div class="client_wrap">
          <header class="client_head">
            <h2 class="head_title">interior lightning service</h2>
            <a class="head_link" href="#">Service description&nbsp;></a>
          </header>
          <div class="client_info">
            <div class="info_left">
              <div class="left_one">
                <span style="margin-right:1rem">
                  <label style="font-weight: 500;">Contact Name:</label>
                  <div>Tom Bruce</div>
                </span>
                <span>
                  <label style="font-weight: 500;">Contact Number:</label>
                  <div>0488888888</div>
                </span>
              </div>
              <div class="left_two">
                <label style="font-weight: 500;">Service Address:</label>
                <div>12 West St, Canleg Vale,NSW 2166</div>
              </div>
              <div class="left_three">
                <label style="font-weight: 500;">Service Time:</label>
                <div>Morning 8AM-11AM, 11 December 2019</div>
              </div>
            </div>
            <div class="info_right">
              <header class="info_head">Full Refund</header>
              <div style="margin-bottom:1rem">
                <label>Amount Paid</label>
                <div>$50</div>
              </div>
              <div>
                <label>Refunded</label>
                <div>$50</div>
              </div>
            </div>
          </div>
          <div class="client_level">Booking Canceled</div>
        </div>
        <div class="client_wrap">
          <header class="client_head">
            <h2 class="head_title">interior lightning service</h2>
            <a class="head_link" href="#">Service description&nbsp;></a>
          </header>
          <div class="client_info">
            <div class="info_left">
              <div class="left_one">
                <span style="margin-right:1rem">
                  <label style="font-weight: 500;">Contact Name:</label>
                  <div>Tom Bruce</div>
                </span>
                <span>
                  <label style="font-weight: 500;">Contact Number:</label>
                  <div>0488888888</div>
                </span>
              </div>
              <div class="left_two">
                <label style="font-weight: 500;">Service Address:</label>
                <div>12 West St, Canleg Vale,NSW 2166</div>
              </div>
              <div class="left_three">
                <label style="font-weight: 500;">Service Time:</label>
                <div>Morning 8AM-11AM, 11 December 2019</div>
              </div>
            </div>
            <div class="info_right">
              <header class="info_head">Full Refund</header>
              <div style="margin-bottom:1rem">
                <label>Amount Paid</label>
                <div>$50</div>
              </div>
              <div>
                <label>Refunded</label>
                <div>$50</div>
              </div>
            </div>
          </div>
          <div class="client_level">Booking Canceled</div>
        </div>
        <div class="client_wrap">
          <header class="client_head">
            <h2 class="head_title">interior lightning service</h2>
            <a class="head_link" href="#">Service description&nbsp;></a>
          </header>
          <div class="client_info">
            <div class="info_left">
              <div class="left_one">
                <span style="margin-right:1rem">
                  <label style="font-weight: 500;">Contact Name:</label>
                  <div>Tom Bruce</div>
                </span>
                <span>
                  <label style="font-weight: 500;">Contact Number:</label>
                  <div>0488888888</div>
                </span>
              </div>
              <div class="left_two">
                <label style="font-weight: 500;">Service Address:</label>
                <div>12 West St, Canleg Vale,NSW 2166</div>
              </div>
              <div class="left_three">
                <label style="font-weight: 500;">Service Time:</label>
                <div>Morning 8AM-11AM, 11 December 2019</div>
              </div>
            </div>
            <div class="info_right">
              <header class="info_head">Full Refund</header>
              <div style="margin-bottom:1rem">
                <label>Amount Paid</label>
                <div>$50</div>
              </div>
              <div>
                <label>Refunded</label>
                <div>$50</div>
              </div>
            </div>
          </div>
          <div class="client_level">Booking Canceled</div>
        </div>
        <div class="client_wrap">
          <header class="client_head">
            <h2 class="head_title">interior lightning service</h2>
            <a class="head_link" href="#">Service description&nbsp;></a>
          </header>
          <div class="client_info">
            <div class="info_left">
              <div class="left_one">
                <span style="margin-right:1rem">
                  <label style="font-weight: 500;">Contact Name:</label>
                  <div>Tom Bruce</div>
                </span>
                <span>
                  <label style="font-weight: 500;">Contact Number:</label>
                  <div>0488888888</div>
                </span>
              </div>
              <div class="left_two">
                <label style="font-weight: 500;">Service Address:</label>
                <div>12 West St, Canleg Vale,NSW 2166</div>
              </div>
              <div class="left_three">
                <label style="font-weight: 500;">Service Time:</label>
                <div>Morning 8AM-11AM, 11 December 2019</div>
              </div>
            </div>
            <div class="info_right">
              <header class="info_head">Full Refund</header>
              <div style="margin-bottom:1rem">
                <label>Amount Paid</label>
                <div>$50</div>
              </div>
              <div>
                <label>Refunded</label>
                <div>$50</div>
              </div>
            </div>
          </div>
          <div class="client_level">Booking Canceled</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VNavbar from '@/components/navbar/index'

export default {
  name: 'List',
  components: {
    VNavbar
  },
  data() {
    return {
      list_left: [
        { id: 0, name: 'My Profile' },
        { id: 1, name: 'Address Book' },
        {
          id: 2,
          name: 'Booking History',
          child: [
            { id: 0, name: 'Upcoing' },
            { id: 1, name: 'Completed' },
            { id: 2, name: 'Canceled' }
          ]
        },
        { id: 3, name: 'Payments Details' },
        { id: 4, name: 'Update Password' },
        { id: 5, name: 'log out' }
      ],
      colors: {
        2: '#ff9900'
      },
      childColors: {
        0: '#ff9900'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  .list_area {
    display: flex;
    padding: 1rem;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    width: 1000px;
    margin: 0 auto;
    .list_left {
      flex: 0 300px;
      .left_wrap {
        margin: 0;
        padding: 0;
        .left_item {
          list-style-type: none;
          padding: 10px 0;
          font-weight: 600;
          color: var(--amplify-grey);
          .child_wrap {
            border-left: 2px solid var(--amplify-primary-color);
            margin-left: 10px;
            padding-left: 20px;
            .child_item {
              list-style-type: none;
              margin: 8px 0;
            }
          }
        }
      }
    }
    .list_right {
      flex: 1;
      .right_head {
        margin-top: 0;
        color: var(--amplify-grey);
      }
      .client_wrap {
        padding: 1rem;
        font-weight: 600;
        color: var(--amplify-grey);
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;

        .client_head {
          display: flex;
          flex-flow: row wrap;
          margin-bottom: 12px;
          justify-content: space-between;
          border-bottom: 2px solid var(--amplify-light-grey);

          .head_title {
            display: inline-block;
            margin-top: 0;
            margin-bottom: 12px;
            color: var(--amplify-secondary-shade);
          }
          .head_link {
            display: inline-block;
            text-decoration: none;
            line-height: 2.4em;
            color: var(--amplify-primary-color);
          }
        }
        .client_info {
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
          align-content: flex-start;
          border-bottom: 4px solid var(--amplify-light-grey);

          .info_left {
            flex: 1;
            margin-bottom: 12px;
            border-right: 2px solid var(--amplify-light-grey);

            .left_one,
            .left_tow,
            .left_three {
              margin: 1rem 0;
            }

            .left_one {
              display: flex;
              margin-top: 0;
              flex-flow: row wrap;
              justify-content: flex-start;
              align-content: flex-start;
            }
          }
          .info_right {
            flex: 0 150px;
            padding: 15px;
            .info_head {
              color: var(--amplify-primary-color);
            }
          }
        }
        .client_level {
          padding: 6px 0;
          text-align: right;
        }
      }
    }
  }
}
</style>
