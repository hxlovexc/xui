<template>
  <div class="row">
    <x-quote>
      <h4>表单</h4>
      <x-form>
        <x-form-item label="用户名">
          <x-input></x-input>
        </x-form-item>
        <x-form-item label="密码">
          <x-input input-type="password"></x-input>
        </x-form-item>
        <x-form-item label="地区">
          <x-select>
            <x-option :value="1" label="北京"></x-option>
            <x-option :value="2" label="广东"></x-option>
            <x-option :value="3" label="湖南"></x-option>
          </x-select>
        </x-form-item>
        <x-form-item label="爱好">
          <x-checkbox>打球</x-checkbox>
          <x-checkbox>看电影</x-checkbox>
          <x-checkbox>看书</x-checkbox>
        </x-form-item>
        <x-form-item label="爱好">
          <x-radio>打球</x-radio>
          <x-radio>看电影</x-radio>
          <x-radio>看书</x-radio>
        </x-form-item>
        <x-form-item label="记住密码">
          <x-switch>打球</x-switch>
        </x-form-item>
        <x-form-item label="备注">
          <x-textarea></x-textarea>
        </x-form-item>
        <x-form-item>
          <x-button>取消</x-button>
          <x-button type="primary">提交</x-button>
        </x-form-item>
      </x-form>
    </x-quote>
    <!--布局-->
    <x-quote>
      <h4>表单布局</h4>
      <x-button-group size="small" radius>
        <x-button @click="labelPosition = 'left'">左对齐</x-button>
        <x-button @click="labelPosition = ''">右对齐</x-button>
        <x-button @click="labelPosition = 'top'">顶部对齐</x-button>
      </x-button-group>
      </br>
      <x-form :label-position="labelPosition">
        <x-form-item label="用户名">
          <x-input></x-input>
        </x-form-item>
        <x-form-item label="密码">
          <x-input input-type="password"></x-input>
        </x-form-item>
        <x-form-item label="地区">
          <x-select>
            <x-option :value="1">北京</x-option>
            <x-option :value="2">广东</x-option>
            <x-option :value="3">湖南</x-option>
          </x-select>
        </x-form-item>
        <x-form-item label="备注">
          <x-textarea></x-textarea>
        </x-form-item>
        <x-form-item>
          <x-button>取消</x-button>
          <x-button type="primary">提交</x-button>
        </x-form-item>
      </x-form>
    </x-quote>
    <!--方块风格-->
    <x-quote>
      <h4>方块风格</h4>
      <x-form pane>
        <x-form-item label="用户名">
          <x-input></x-input>
        </x-form-item>
        <x-form-item label="密码">
          <x-input input-type="password"></x-input>
        </x-form-item>
        <x-form-item label="地区">
          <x-select>
            <x-option :value="1">北京</x-option>
            <x-option :value="2">广东</x-option>
            <x-option :value="3">湖南</x-option>
          </x-select>
        </x-form-item>
        <x-form-item label="备注" is-textarea>
          <x-textarea></x-textarea>
        </x-form-item>
        <x-form-item>
          <x-button>取消</x-button>
          <x-button type="primary">提交</x-button>
        </x-form-item>
      </x-form>
    </x-quote>
    <!--label宽度自定义-->
    <x-quote>
      <h4>label宽度自定义（150px）</h4>
      <x-form label-width="150px">
        <x-form-item label="用户名">
          <x-input></x-input>
        </x-form-item>
        <x-form-item label="密码">
          <x-input input-type="password"></x-input>
        </x-form-item>
        <x-form-item label="地区">
          <x-select>
            <x-option :value="1">北京</x-option>
            <x-option :value="2">广东</x-option>
            <x-option :value="3">湖南</x-option>
          </x-select>
        </x-form-item>
        <x-form-item label="备注" is-textarea>
          <x-textarea></x-textarea>
        </x-form-item>
        <x-form-item>
          <x-button>取消</x-button>
          <x-button type="primary">提交</x-button>
        </x-form-item>
      </x-form>
    </x-quote>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        labelPosition: ''
      };
    }
  };
</script>
