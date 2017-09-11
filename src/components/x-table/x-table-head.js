export default {
  props: {
    data: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  methods: {
    sort (data, type) {
      if (data.sortMethod) {
        data.sortType = data.sortMethod(data.name, type);
      } else {
        data.sortType = type;
        this.$emit('sort', data.name, type);
      }
    }
  },
  render (h) {
    return (
      <thead>
        <tr>
          {
            this._l(this.data, (item, index) => {
              return (
                <th>
                  <span>{item.renderHead(h)}</span>
                  {item.sort ? (
                    <div class="x-table-sort">
                      <span
                        on-click={() => this.sort(item, 'up')}
                        class={{
                          'sort-active': item.sortType === 'up'
                        }}
                        title="升序"
                      >
                        <i class="x-icon-chevron-up"></i>
                      </span>
                      <span
                        on-click={() => this.sort(item, 'down')}
                        class={{
                          'sort-active': item.sortType === 'down'
                        }}
                        title="降序"
                      >
                        <i class="x-icon-chevron-down"></i>
                      </span>
                    </div>
                  ) : ''}
                </th>
              );
            })
          }
        </tr>
      </thead>
    );
  }
};
